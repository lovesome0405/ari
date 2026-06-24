# MARU Python Dynamic API

This lightweight server turns the current static MARU prototype into a dynamic local web app without installing Java, MySQL, or Docker.

It reuses the existing JSON catalog files and adds a SQLite-backed saved-routes API on `http://localhost:8080`.

## Run

```powershell
cd C:\Users\남양주시청\Documents\Codex\2026-06-23\d\work\ari-github
python python-backend/server.py
```

## Endpoints

- `GET /api/health`
- `GET /api/courses`
- `GET /api/courses/{id}`
- `GET /api/places`
- `GET /api/festivals`
- `GET /api/heritage`
- `GET /api/public-data-sources`
- `GET /api/saved-routes`
- `POST /api/saved-routes`
- `DELETE /api/saved-routes/{id}`

## Why this works fast

- The frontend already tries `http://localhost:8080/api/...` first when the app is opened locally.
- If this server is running, the current `file://` prototype starts behaving like a dynamic site.
- Saved routes are persisted in `python-backend/runtime/maru_dynamic.sqlite3`.
