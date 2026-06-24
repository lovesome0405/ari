$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$outputRoot = Join-Path $repoRoot "..\..\outputs\maru-presentation-kit"
$resolvedOutputRoot = [System.IO.Path]::GetFullPath($outputRoot)
$pyInstallerWork = Join-Path $PSScriptRoot "build"
$distRoot = Join-Path $PSScriptRoot "dist"
$bundleRoot = Join-Path $resolvedOutputRoot "app"
$backendDistRoot = Join-Path $distRoot "backend"
$backendExe = Join-Path $backendDistRoot "maru-backend.exe"

if (Test-Path $resolvedOutputRoot) {
  Remove-Item -LiteralPath $resolvedOutputRoot -Recurse -Force
}

New-Item -ItemType Directory -Force -Path $resolvedOutputRoot | Out-Null
New-Item -ItemType Directory -Force -Path $pyInstallerWork | Out-Null
New-Item -ItemType Directory -Force -Path $backendDistRoot | Out-Null

$pyInstallerArgs = @(
  "--noconfirm"
  "--clean"
  "--onefile"
  "--name", "maru-backend"
  "--distpath", $backendDistRoot
  "--workpath", $pyInstallerWork
  "--specpath", $PSScriptRoot
  "--add-data=..\ari_culture_resources_appjs.json:."
  "--add-data=..\data:data"
  (Join-Path $PSScriptRoot "server.py")
)

Push-Location $repoRoot
try {
  python -m PyInstaller @pyInstallerArgs
  if ($LASTEXITCODE -ne 0) {
    throw "PyInstaller build failed with exit code $LASTEXITCODE"
  }
} finally {
  Pop-Location
}

New-Item -ItemType Directory -Force -Path $bundleRoot | Out-Null

$frontendItems = @(
  "404.html",
  "about.html",
  "admin.html",
  "admin.js",
  "ai-photo.html",
  "app.js",
  "ari_culture_resources_appjs.json",
  "culture-data.html",
  "index.html",
  "manifest.json",
  "map.html",
  "passport.html",
  "planner.html",
  "robots.txt",
  "route-detail.html",
  "routes.html",
  "service-worker.js",
  "sitemap.xml",
  "style.css",
  "support.html",
  "weather.html",
  "assets",
  "data"
)

foreach ($item in $frontendItems) {
  $source = Join-Path $repoRoot $item
  $target = Join-Path $bundleRoot $item
  if (Test-Path $source -PathType Container) {
    Copy-Item -LiteralPath $source -Destination $target -Recurse -Force
  } else {
    $targetDir = Split-Path -Parent $target
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
    Copy-Item -LiteralPath $source -Destination $target -Force
  }
}

Copy-Item -LiteralPath $backendExe -Destination (Join-Path $bundleRoot "maru-backend.exe") -Force

$launchScript = @'
@echo off
setlocal
cd /d "%~dp0"
taskkill /IM maru-backend.exe /F >nul 2>nul
powershell -NoProfile -Command "$response = $null; try { $response = Invoke-RestMethod 'http://127.0.0.1:8080/api/health' -TimeoutSec 2 } catch {}; if ($response -and $response.status -eq 'ok') { exit 0 } else { exit 1 }"
if errorlevel 1 (
  start "MARU Backend" /min "%~dp0maru-backend.exe"
  timeout /t 2 /nobreak >nul
)
start "" "%~dp0index.html"
echo MARU dynamic presentation kit is running.
echo If the browser did not open, open index.html manually.
'@
Set-Content -LiteralPath (Join-Path $bundleRoot "launch-maru-demo.bat") -Value $launchScript -Encoding ASCII

$stopScript = @'
@echo off
taskkill /IM maru-backend.exe /F
'@
Set-Content -LiteralPath (Join-Path $bundleRoot "stop-maru-demo.bat") -Value $stopScript -Encoding ASCII

$readme = @'
MARU dynamic presentation kit

1. Copy this entire folder to the presentation computer.
2. Run launch-maru-demo.bat
3. Present from the opened browser window.

Notes
- No IntelliJ, MySQL, or Java install is required.
- maru-backend.exe starts a local API server on localhost:8080
- index.html automatically reads that API.
- Saved data is created in the runtime folder as a SQLite file.

Stop
- Run stop-maru-demo.bat or close the maru-backend.exe process.
'@
Set-Content -LiteralPath (Join-Path $bundleRoot "README.txt") -Value $readme -Encoding ASCII

Write-Host "Presentation kit created at $bundleRoot"
