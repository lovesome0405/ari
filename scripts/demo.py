"""Run the existing API and a public-files-only frontend. Python 3.10+."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import subprocess
import sys

from build_static import build, OUT, ROOT


def main():
    build()
    # Bind the frontend before spawning a child: port conflicts leave no orphan API.
    server = ThreadingHTTPServer(("127.0.0.1", 4173), partial(SimpleHTTPRequestHandler, directory=str(OUT)))
    api = subprocess.Popen([sys.executable, str(ROOT / "python-backend/server.py")], cwd=ROOT)
    print("MARU: http://127.0.0.1:4173/  |  Stop: Ctrl+C", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
        api.terminate()
        try:
            api.wait(timeout=5)
        except subprocess.TimeoutExpired:
            api.kill()
            api.wait()


if __name__ == "__main__":
    main()
