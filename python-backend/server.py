import base64
from email.parser import BytesParser
from email.policy import default as email_policy
import json
import os
import sqlite3
import sys
from datetime import datetime, timedelta, timezone
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
ANALYTICS_RECENT_WINDOW_HOURS = 6
ALLOWED_ENGAGEMENT_ACTIONS = {"detail_view", "visit_intent", "save", "recommend"}

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


def sanitize_text(value, field_name: str, max_length: int | None = None):
    text = str(value or "").strip()
    if not text:
        return None
    if max_length is not None and len(text) > max_length:
        raise ValueError(f"{field_name} must be {max_length} characters or fewer")
    return text


def parse_timestamp(value):
    raw_value = str(value or "").strip()
    if not raw_value:
        return None
    try:
        parsed = datetime.fromisoformat(raw_value.replace("Z", "+00:00"))
    except ValueError:
        return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone()


def is_foreigner_signal(language: str | None, traveler_type: str | None):
    normalized_traveler_type = str(traveler_type or "").strip().lower()
    normalized_language = str(language or "").strip().lower()
    if normalized_traveler_type == "foreigner":
        return True
    return normalized_language not in ("", "ko")


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
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS engagement_events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                event_scope TEXT NOT NULL,
                subject_id TEXT NOT NULL,
                subject_label TEXT,
                route_id TEXT,
                route_title TEXT,
                action TEXT NOT NULL,
                language TEXT,
                traveler_type TEXT,
                created_at TEXT NOT NULL
            )
            """
        )
        connection.execute(
            """
            CREATE INDEX IF NOT EXISTS idx_engagement_scope_subject
            ON engagement_events (event_scope, subject_id)
            """
        )
        connection.execute(
            """
            CREATE INDEX IF NOT EXISTS idx_engagement_route
            ON engagement_events (route_id)
            """
        )
        connection.execute(
            """
            CREATE INDEX IF NOT EXISTS idx_engagement_created_at
            ON engagement_events (created_at)
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
    route_id = sanitize_text(payload.get("routeId"), "routeId", 120)
    route_title = sanitize_text(payload.get("routeTitle"), "routeTitle", 255)
    language = sanitize_text(payload.get("language"), "language", 20)
    theme = sanitize_text(payload.get("theme"), "theme", 120)
    memo = sanitize_text(payload.get("memo"), "memo", 600)

    if not route_id:
        raise ValueError("routeId is required")
    if not route_title:
        raise ValueError("routeTitle is required")

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


def normalize_engagement_places(raw_places):
    if not isinstance(raw_places, list):
        return []

    normalized = []
    seen_ids = set()
    for item in raw_places:
        if not isinstance(item, dict):
            continue
        place_id = sanitize_text(item.get("id") or item.get("placeId"), "placeId", 120)
        if not place_id or place_id in seen_ids:
            continue
        seen_ids.add(place_id)
        normalized.append({
            "id": place_id,
            "name": sanitize_text(
                item.get("name") or item.get("label") or item.get("displayName"),
                "placeName",
                255,
            )
            or place_id,
        })
    return normalized


def create_engagement_event(payload):
    action = sanitize_text(payload.get("action"), "action", 40)
    if action not in ALLOWED_ENGAGEMENT_ACTIONS:
        raise ValueError("action must be one of detail_view, visit_intent, save, recommend")

    route_id = sanitize_text(payload.get("routeId"), "routeId", 120)
    route_title = sanitize_text(payload.get("routeTitle"), "routeTitle", 255) or route_id
    language = sanitize_text(payload.get("language"), "language", 20)
    traveler_type = sanitize_text(payload.get("travelerType"), "travelerType", 20)
    places = normalize_engagement_places(payload.get("places"))

    if not route_id and not places:
        raise ValueError("routeId or places is required")

    created_at = datetime.now().astimezone().isoformat()
    rows = []

    if route_id:
        rows.append((
            "route",
            route_id,
            route_title or route_id,
            route_id,
            route_title or route_id,
            action,
            language,
            traveler_type,
            created_at,
        ))

    for place in places:
        rows.append((
            "place",
            place["id"],
            place["name"],
            route_id,
            route_title or route_id,
            action,
            language,
            traveler_type,
            created_at,
        ))

    with sqlite3.connect(DB_PATH) as connection:
        connection.executemany(
            """
            INSERT INTO engagement_events (
                event_scope,
                subject_id,
                subject_label,
                route_id,
                route_title,
                action,
                language,
                traveler_type,
                created_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            rows,
        )
        connection.commit()

    return {
        "ok": True,
        "action": action,
        "routeId": route_id,
        "createdAt": created_at,
        "createdCount": len(rows),
        "placesTracked": len(places),
    }


def create_summary_counter(scope: str, row):
    base = {
        "totalSignals": 0,
        "todaySignals": 0,
        "recentSignals": 0,
        "foreignerSignals": 0,
        "detailViews": 0,
        "visitIntents": 0,
        "saves": 0,
        "recommends": 0,
        "lastEventAt": None,
    }

    if scope == "route":
        base.update({
            "routeId": row["subject_id"],
            "routeTitle": row["subject_label"] or row["route_title"] or row["subject_id"],
        })
    else:
        base.update({
            "placeId": row["subject_id"],
            "placeName": row["subject_label"] or row["subject_id"],
            "routeId": row["route_id"] or "",
        })
    return base


def apply_summary_signal(counter, row, now_local, recent_cutoff):
    created_at = parse_timestamp(row["created_at"]) or now_local
    action = str(row["action"] or "").strip()

    counter["totalSignals"] += 1
    if created_at.date() == now_local.date():
        counter["todaySignals"] += 1
    if created_at >= recent_cutoff:
        counter["recentSignals"] += 1
    if is_foreigner_signal(row["language"], row["traveler_type"]):
        counter["foreignerSignals"] += 1
    if counter["lastEventAt"] is None:
        counter["lastEventAt"] = row["created_at"]

    if action == "detail_view":
        counter["detailViews"] += 1
    elif action == "visit_intent":
        counter["visitIntents"] += 1
    elif action == "save":
        counter["saves"] += 1
    elif action == "recommend":
        counter["recommends"] += 1


def build_engagement_summary():
    with sqlite3.connect(DB_PATH) as connection:
        connection.row_factory = sqlite3.Row
        rows = connection.execute(
            """
            SELECT
                id,
                event_scope,
                subject_id,
                subject_label,
                route_id,
                route_title,
                action,
                language,
                traveler_type,
                created_at
            FROM engagement_events
            ORDER BY created_at DESC, id DESC
            """
        ).fetchall()

    now_local = datetime.now().astimezone()
    recent_cutoff = now_local - timedelta(hours=ANALYTICS_RECENT_WINDOW_HOURS)
    route_counters = {}
    place_counters = {}
    totals = {"events": 0, "routeEvents": 0, "placeEvents": 0}

    for row in rows:
        scope = str(row["event_scope"] or "").strip()
        if scope not in {"route", "place"}:
            continue

        key = str(row["subject_id"] or "").strip()
        if not key:
            continue

        totals["events"] += 1
        if scope == "route":
            totals["routeEvents"] += 1
            counter = route_counters.setdefault(key, create_summary_counter(scope, row))
        else:
            totals["placeEvents"] += 1
            counter = place_counters.setdefault(key, create_summary_counter(scope, row))

        apply_summary_signal(counter, row, now_local, recent_cutoff)

    route_items = sorted(
        route_counters.values(),
        key=lambda item: (
            item["todaySignals"],
            item["recentSignals"],
            item["recommends"],
            item["saves"],
            item["foreignerSignals"],
            item["totalSignals"],
            item.get("routeTitle", ""),
        ),
        reverse=True,
    )
    place_items = sorted(
        place_counters.values(),
        key=lambda item: (
            item["todaySignals"],
            item["recentSignals"],
            item["recommends"],
            item["saves"],
            item["foreignerSignals"],
            item["totalSignals"],
            item.get("placeName", ""),
        ),
        reverse=True,
    )

    return {
        "generatedAt": now_local.isoformat(),
        "today": now_local.date().isoformat(),
        "recentWindowHours": ANALYTICS_RECENT_WINDOW_HOURS,
        "source": "sqlite",
        "totals": totals,
        "routes": route_items,
        "places": place_items,
    }


class MaruApiHandler(BaseHTTPRequestHandler):
    server_version = "MaruPythonBackend/1.1"

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
        payload = json.loads(raw.decode("utf-8"))
        if not isinstance(payload, dict):
            raise ValueError("JSON body must be an object")
        return payload

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
                    "/api/analytics/summary",
                    "/api/analytics/engagement",
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

        if path == "/api/analytics/summary":
            self._send_json(200, build_engagement_summary())
            return

        self._send_json(404, {"error": "Not found"})

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/") or "/"

        if path == "/api/saved-routes":
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
            return

        if path == "/api/analytics/engagement":
            try:
                payload = self._read_json_body()
                created = create_engagement_event(payload)
            except json.JSONDecodeError:
                self._send_json(400, {"error": "Invalid JSON body"})
                return
            except ValueError as error:
                self._send_json(400, {"error": str(error)})
                return
            except Exception as error:
                self._send_json(500, {"error": f"Failed to save engagement event: {error}"})
                return

            self._send_json(201, created)
            return

        self._send_json(404, {"error": "Not found"})

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
