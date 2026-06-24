import json
import os
import sqlite3
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


PROJECT_ROOT = Path(__file__).resolve().parents[1]
RUNTIME_DIR = Path(__file__).resolve().parent / "runtime"
DB_PATH = RUNTIME_DIR / "maru_dynamic.sqlite3"
HOST = os.environ.get("MARU_API_HOST", "127.0.0.1")
PORT = int(os.environ.get("PORT") or os.environ.get("MARU_API_PORT") or "8080")

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
