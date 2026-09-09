"""Stage only public frontend files for static hosting. No third-party packages."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist"
PUBLIC_FILES = (
    "app.js", "admin.js", "style.css", "manifest.json", "service-worker.js",
    "ari_culture_resources_appjs.json", "robots.txt", "sitemap.xml", ".nojekyll",
)


def build():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    for source in [*ROOT.glob("*.html"), *(ROOT / name for name in PUBLIC_FILES)]:
        shutil.copy2(source, OUT / source.name)
    for name in ("assets", "data"):
        shutil.copytree(ROOT / name, OUT / name)
    print(f"Public frontend prepared: {OUT}")


if __name__ == "__main__":
    build()
