# MARU Python Dynamic API

This lightweight server turns the static MARU prototype into a Maven-free local PWA demo.

It reuses the existing JSON catalog files, persists saved routes in SQLite, and can call OpenAI's image edit API for the high-quality royal portrait transform when `OPENAI_API_KEY` is set.

## Maven-Free PWA Demo

Run from the repository root:

```powershell
$env:OPENAI_API_KEY="sk-..."
powershell -ExecutionPolicy Bypass -File .\start-maru-pwa-demo.ps1
```

This starts:

- local API server: `http://127.0.0.1:8080`
- static PWA frontend: `http://127.0.0.1:4173`
- AI photo page: `http://127.0.0.1:4173/ai-photo.html`

Stop the demo:

```powershell
powershell -ExecutionPolicy Bypass -File .\stop-maru-pwa-demo.ps1
```

## Manual API-Only Run

```powershell
$env:OPENAI_API_KEY="sk-..."
$env:MARU_AI_PHOTO_MODEL="gpt-image-1.5"
$env:OPENAI_IMAGE_SIZE="1024x1536"
$env:MARU_AI_PHOTO_QUALITY="high"
python python-backend/server.py
```

## Build Presentation Kit

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

## Why This Fits The PWA Direction

- The frontend remains static and installable as a PWA.
- The API key stays outside the browser in a local API process.
- For production, the same `/api/...` contract can move to an HTTPS API host or serverless function.
- Saved routes persist in `python-backend/runtime/maru_dynamic.sqlite3` during local demos.
