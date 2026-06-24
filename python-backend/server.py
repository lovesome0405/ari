import base64
from email.parser import BytesParser
from email.policy import default as email_policy
import json
import os
import sqlite3
import sys
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen


if getattr(sys, "frozen", False):
    PROJECT_ROOT = Path(getattr(sys, "_MEIPASS", Path(sys.executable).resolve().parent))
    APP_ROOT = Path(sys.executable).resolve().parent
else:
    PROJECT_ROOT = Path(__file__).resolve().parents[1]
    APP_ROOT = Path(__file__).resolve().parent

RUNTIME_DIR = APP_ROOT / "runtime"
DB_PATH = RUNTIME_DIR / "maru_dynamic.sqlite3"
HOST = os.environ.get("MARU_API_HOST", "127.0.0.1")
PORT = int(os.environ.get("PORT") or os.environ.get("MARU_API_PORT") or "8080")
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")
OPENAI_BASE_URL = os.environ.get("OPENAI_BASE_URL", "https://api.openai.com/v1").rstrip("/")
OPENAI_IMAGE_MODEL = os.environ.get("MARU_AI_PHOTO_MODEL") or os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-1.5")
OPENAI_IMAGE_SIZE = os.environ.get("OPENAI_IMAGE_SIZE", "1024x1536")
OPENAI_IMAGE_QUALITY = os.environ.get("MARU_AI_PHOTO_QUALITY") or os.environ.get("OPENAI_IMAGE_QUALITY", "high")
MAX_IMAGE_DATA_URL_LENGTH = 21_000_000
MAX_IMAGE_UPLOAD_BYTES = 15_000_000

DATA_PATHS = {
    "courses": PROJECT_ROOT / "data" / "courses.json",
    "places": PROJECT_ROOT / "ari_culture_resources_appjs.json",
    "festivals": PROJECT_ROOT / "data" / "festivals.json",
    "heritage": PROJECT_ROOT / "data" / "heritage.json",
    "public-data-sources": PROJECT_ROOT / "data" / "public-data-sources.json",
}


def read_json_file(path: Path):
    last_error = None
    for encoding in ("utf-8-sig", "utf-8", "cp949"):
        try:
            return json.loads(path.read_text(encoding=encoding))
        except Exception as error:
            last_error = error
    raise last_error


def load_json_array(path: Path):
    payload = read_json_file(path)
    if isinstance(payload, list):
        return payload
    if isinstance(payload, dict):
        for key in ("items", "data", "resources", "courses", "places"):
            value = payload.get(key)
            if isinstance(value, list):
                return value
    return []


def get_catalog_items(kind: str):
    path = DATA_PATHS[kind]
    return load_json_array(path)


def init_db():
    RUNTIME_DIR.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS saved_routes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                route_id TEXT NOT NULL,
                route_title TEXT NOT NULL,
                language TEXT,
                theme TEXT,
                memo TEXT,
                created_at TEXT NOT NULL
            )
            """
        )
        connection.commit()


def row_to_saved_route(row):
    return {
        "id": row["id"],
        "routeId": row["route_id"],
        "routeTitle": row["route_title"],
        "language": row["language"],
        "theme": row["theme"],
        "memo": row["memo"],
        "createdAt": row["created_at"],
    }


def list_saved_routes():
    with sqlite3.connect(DB_PATH) as connection:
        connection.row_factory = sqlite3.Row
        rows = connection.execute(
            """
            SELECT id, route_id, route_title, language, theme, memo, created_at
            FROM saved_routes
            ORDER BY id DESC
            """
        ).fetchall()
    return [row_to_saved_route(row) for row in rows]


def create_saved_route(payload):
    route_id = str(payload.get("routeId", "")).strip()
    route_title = str(payload.get("routeTitle", "")).strip()
    language = str(payload.get("language", "")).strip() or None
    theme = str(payload.get("theme", "")).strip() or None
    memo = str(payload.get("memo", "")).strip() or None

    if not route_id:
        raise ValueError("routeId is required")
    if not route_title:
        raise ValueError("routeTitle is required")
    if len(route_id) > 120:
        raise ValueError("routeId must be 120 characters or fewer")
    if len(route_title) > 255:
        raise ValueError("routeTitle must be 255 characters or fewer")
    if language and len(language) > 20:
        raise ValueError("language must be 20 characters or fewer")
    if theme and len(theme) > 120:
        raise ValueError("theme must be 120 characters or fewer")

    created_at = datetime.now(timezone.utc).isoformat()

    with sqlite3.connect(DB_PATH) as connection:
        cursor = connection.execute(
            """
            INSERT INTO saved_routes (route_id, route_title, language, theme, memo, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (route_id, route_title, language, theme, memo, created_at),
        )
        connection.commit()
        saved_id = cursor.lastrowid

    return {
        "id": saved_id,
        "routeId": route_id,
        "routeTitle": route_title,
        "language": language,
        "theme": theme,
        "memo": memo,
        "createdAt": created_at,
    }


def delete_saved_route(saved_id: int):
    with sqlite3.connect(DB_PATH) as connection:
        cursor = connection.execute("DELETE FROM saved_routes WHERE id = ?", (saved_id,))
        connection.commit()
    return cursor.rowcount > 0


def royal_portrait_prompt(custom_prompt=""):
    prompt = (
        "Transform the uploaded portrait into a high-end photorealistic Joseon royal portrait. "
        "Preserve the same person's face, face shape, eyes, nose, mouth, gaze, expression, skin tone, "
        "hairstyle impression, and natural proportions. Do not beautify into a different person. "
        "Recreate the image as a luxury royal king portrait photo: add a black-and-gold royal crown, "
        "a dark navy Joseon king's gonryongpo with raised gold dragon embroidery, a white inner collar, "
        "an ornate gold belt, and a carved dragon throne. Place the person in a richly decorated Joseon "
        "royal throne room with lacquered palace pillars, hanging bead ornaments, gold dragon details, "
        "warm sunset light, palace roofs softly blurred outside, shallow depth of field, photorealistic "
        "skin texture, cinematic premium editorial lighting, and refined silk and gold fabric texture. "
        "This must be a full AI image edit, not a flat card frame, sticker, sketch, browser filter, "
        "or simple background swap. No text, watermark, logos, extra faces, distorted hands, modern "
        "objects, or collage artifacts. Do not imitate any living artist or specific commercial studio style."
    )
    extra = str(custom_prompt or "").strip()
    if extra:
        prompt += " Extra user request: " + extra[:1000]
    return prompt


def build_image_data_url(image_bytes: bytes, content_type: str):
    normalized_type = (content_type or "image/png").split(";")[0].strip().lower()
    if normalized_type not in {"image/jpeg", "image/jpg", "image/png", "image/webp"}:
        raise ValueError("JPG, PNG, and WEBP images are supported")
    if not image_bytes:
        raise ValueError("image file is empty")
    if len(image_bytes) > MAX_IMAGE_UPLOAD_BYTES:
        raise ValueError("image file is too large")
    image_base64 = base64.b64encode(image_bytes).decode("ascii")
    return f"data:{normalized_type};base64,{image_base64}"


def parse_multipart_form(raw_body: bytes, content_type: str):
    if "multipart/form-data" not in (content_type or "").lower():
        raise ValueError("Content-Type must be multipart/form-data")

    message = BytesParser(policy=email_policy).parsebytes(
        b"Content-Type: " + content_type.encode("utf-8") + b"\r\n"
        + b"MIME-Version: 1.0\r\n\r\n"
        + raw_body
    )
    if not message.is_multipart():
        raise ValueError("multipart body is invalid")

    fields = {}
    files = {}
    for part in message.iter_parts():
        disposition_params = part.get_params(header="content-disposition", unquote=True) or []
        params = {key: value for key, value in disposition_params[1:]}
        name = params.get("name")
        if not name:
            continue

        payload = part.get_payload(decode=True) or b""
        filename = params.get("filename")
        if filename:
            files[name] = {
                "filename": filename,
                "content_type": part.get_content_type(),
                "bytes": payload,
            }
        else:
            charset = part.get_content_charset() or "utf-8"
            fields[name] = payload.decode(charset, errors="replace")

    return fields, files


def create_royal_portrait(payload):
    if not OPENAI_API_KEY:
        raise RuntimeError("OPENAI_API_KEY is not configured")

    image_data_url = str(payload.get("imageDataUrl", "")).strip()
    style = str(payload.get("style", "royal")).strip() or "royal"
    custom_prompt = str(payload.get("customPrompt", "")).strip()
    if not image_data_url.startswith("data:image/"):
        raise ValueError("imageDataUrl must be a data:image URL")
    if len(image_data_url) > MAX_IMAGE_DATA_URL_LENGTH:
        raise ValueError("imageDataUrl is too large")

    request_body = json.dumps({
        "model": OPENAI_IMAGE_MODEL,
        "images": [{"image_url": image_data_url}],
        "prompt": royal_portrait_prompt(custom_prompt),
        "size": OPENAI_IMAGE_SIZE,
        "quality": OPENAI_IMAGE_QUALITY,
        "input_fidelity": "high",
        "background": "opaque",
        "output_format": "png",
    }).encode("utf-8")

    request = Request(
        f"{OPENAI_BASE_URL}/images/edits",
        data=request_body,
        headers={
            "Authorization": f"Bearer {OPENAI_API_KEY}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    with urlopen(request, timeout=120) as response:
        response_payload = json.loads(response.read().decode("utf-8"))

    image_base64 = (
        response_payload.get("data", [{}])[0].get("b64_json", "")
        if isinstance(response_payload.get("data"), list)
        else ""
    )
    if not image_base64:
        raise RuntimeError("OpenAI image response did not include image data")

    return {
        "imageDataUrl": f"data:image/png;base64,{image_base64}",
        "model": OPENAI_IMAGE_MODEL,
        "style": style,
        "message": "GPT 왕실 초상 변환이 완료되었습니다.",
    }


class MaruApiHandler(BaseHTTPRequestHandler):
    server_version = "MaruPythonBackend/1.0"

    def log_message(self, fmt, *args):
        print("[%s] %s" % (self.log_date_time_string(), fmt % args))

    def _send_json(self, status_code: int, payload=None, extra_headers=None):
        body = b""
        if payload is not None:
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")

        self.send_response(status_code)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Cache-Control", "no-store")
        if payload is not None:
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
        if extra_headers:
            for key, value in extra_headers.items():
                self.send_header(key, value)
        self.end_headers()
        if body:
            self.wfile.write(body)

    def _read_json_body(self):
        length = int(self.headers.get("Content-Length", "0") or "0")
        raw = self.rfile.read(length) if length else b"{}"
        if not raw:
            return {}
        return json.loads(raw.decode("utf-8"))

    def do_OPTIONS(self):
        self._send_json(204)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/") or "/"

        if path == "/":
            self._send_json(200, {
                "name": "MARU Python Dynamic API",
                "status": "ok",
                "endpoints": [
                    "/api/health",
                    "/api/courses",
                    "/api/courses/{id}",
                    "/api/places",
                    "/api/festivals",
                    "/api/heritage",
                    "/api/public-data-sources",
                    "/api/saved-routes",
                    "/api/ai-photo/transform",
                    "/api/ai-photo/royal-portrait",
                ],
            })
            return

        if path == "/api/health":
            self._send_json(200, {"status": "ok"})
            return

        if path == "/api/courses":
            self._send_json(200, get_catalog_items("courses"))
            return

        if path.startswith("/api/courses/"):
            course_id = path.split("/", 4)[3]
            course = next((item for item in get_catalog_items("courses") if str(item.get("id")) == course_id), None)
            if course is None:
                self._send_json(404, {"error": "Course not found"})
                return
            self._send_json(200, course)
            return

        if path == "/api/places":
            self._send_json(200, get_catalog_items("places"))
            return

        if path == "/api/festivals":
            self._send_json(200, get_catalog_items("festivals"))
            return

        if path == "/api/heritage":
            self._send_json(200, get_catalog_items("heritage"))
            return

        if path == "/api/public-data-sources":
            self._send_json(200, get_catalog_items("public-data-sources"))
            return

        if path == "/api/saved-routes":
            self._send_json(200, list_saved_routes())
            return

        self._send_json(404, {"error": "Not found"})

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/") or "/"

        if path == "/api/ai-photo/transform":
            try:
                length = int(self.headers.get("Content-Length", "0") or "0")
                raw_body = self.rfile.read(length) if length else b""
                fields, files = parse_multipart_form(raw_body, self.headers.get("Content-Type", ""))
                image_file = files.get("image") or files.get("image[]")
                if not image_file:
                    raise ValueError("image file is required")
                image_data_url = build_image_data_url(image_file["bytes"], image_file["content_type"])
                created = create_royal_portrait({
                    "imageDataUrl": image_data_url,
                    "style": fields.get("styleId", "royal"),
                    "customPrompt": fields.get("customPrompt", ""),
                })
            except ValueError as error:
                self._send_json(400, {"error": str(error)})
                return
            except RuntimeError as error:
                self._send_json(503, {"error": str(error)})
                return
            except Exception as error:
                self._send_json(502, {"error": f"Failed to create royal portrait: {error}"})
                return

            self._send_json(200, created)
            return

        if path == "/api/ai-photo/royal-portrait":
            try:
                payload = self._read_json_body()
                created = create_royal_portrait(payload)
            except json.JSONDecodeError:
                self._send_json(400, {"error": "Invalid JSON body"})
                return
            except ValueError as error:
                self._send_json(400, {"error": str(error)})
                return
            except RuntimeError as error:
                self._send_json(503, {"error": str(error)})
                return
            except Exception as error:
                self._send_json(502, {"error": f"Failed to create royal portrait: {error}"})
                return

            self._send_json(200, created)
            return

        if path != "/api/saved-routes":
            self._send_json(404, {"error": "Not found"})
            return

        try:
            payload = self._read_json_body()
            created = create_saved_route(payload)
        except json.JSONDecodeError:
            self._send_json(400, {"error": "Invalid JSON body"})
            return
        except ValueError as error:
            self._send_json(400, {"error": str(error)})
            return
        except Exception as error:
            self._send_json(500, {"error": f"Failed to save route: {error}"})
            return

        self._send_json(
            201,
            created,
            extra_headers={"Location": f"/api/saved-routes/{created['id']}"},
        )

    def do_DELETE(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/") or "/"

        if not path.startswith("/api/saved-routes/"):
            self._send_json(404, {"error": "Not found"})
            return

        try:
            saved_id = int(path.split("/", 4)[3])
        except (IndexError, ValueError):
            self._send_json(400, {"error": "Invalid saved route id"})
            return

        if not delete_saved_route(saved_id):
            self._send_json(404, {"error": "Saved route not found"})
            return

        self._send_json(204)


def main():
    init_db()
    server = ThreadingHTTPServer((HOST, PORT), MaruApiHandler)
    print(f"MARU Python dynamic API running at http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping MARU Python dynamic API...")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
