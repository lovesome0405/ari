# MARU Python Dynamic API

This lightweight server turns the current static MARU prototype into a dynamic local web app without installing Java, MySQL, or Docker.

It reuses the existing JSON catalog files and adds a SQLite-backed saved-routes API on `http://localhost:8080`.

If `OPENAI_API_KEY` is set, the AI photo page can also call OpenAI's image edit API through this local server for the high-quality royal portrait transform.

## Run

```powershell
cd C:\Users\남양주시청\Documents\Codex\2026-06-23\d\work\ari-github
python python-backend/server.py
```

Optional GPT image transform setup:

```powershell
$env:OPENAI_API_KEY="sk-..."
$env:MARU_AI_PHOTO_MODEL="gpt-image-1.5"
$env:OPENAI_IMAGE_SIZE="1024x1536"
$env:MARU_AI_PHOTO_QUALITY="high"
python python-backend/server.py
```

## Build presentation kit

This creates a portable Windows demo bundle with the frontend files, a packaged backend exe, and launch scripts.

```powershell
powershell -ExecutionPolicy Bypass -File python-backend/build-demo-package.ps1
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
- `POST /api/ai-photo/transform`

## Why this works fast

- The frontend already tries `http://localhost:8080/api/...` first when the app is opened locally.
- If this server is running, the current `file://` prototype starts behaving like a dynamic site.
- Saved routes are persisted in `python-backend/runtime/maru_dynamic.sqlite3`.
