param(
  [string]$ApiKey = $env:OPENAI_API_KEY,
  [int]$ApiPort = 8080,
  [int]$WebPort = 4173
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path

function Quote-PowerShellValue([string]$Value) {
  return "'" + ($Value -replace "'", "''") + "'"
}

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
  Write-Error "Python is required for the Maven-free MARU demo. Install Python 3.11+ and try again."
}

$env:MARU_API_PORT = "$ApiPort"
$env:MARU_AI_PHOTO_MODEL = if ($env:MARU_AI_PHOTO_MODEL) { $env:MARU_AI_PHOTO_MODEL } else { "gpt-image-1.5" }
$env:MARU_AI_PHOTO_QUALITY = if ($env:MARU_AI_PHOTO_QUALITY) { $env:MARU_AI_PHOTO_QUALITY } else { "high" }

if ($ApiKey) {
  $env:OPENAI_API_KEY = $ApiKey
} else {
  Write-Warning "OPENAI_API_KEY is not set. The app will open, but the royal portrait AI transform will not run."
}

$existingApi = Get-NetTCPConnection -LocalPort $ApiPort -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
$existingWeb = Get-NetTCPConnection -LocalPort $WebPort -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1

if (-not $existingApi) {
  $backendCommand = @"
Set-Location $(Quote-PowerShellValue $Root)
`$env:OPENAI_API_KEY = $(Quote-PowerShellValue $env:OPENAI_API_KEY)
`$env:MARU_API_PORT = $(Quote-PowerShellValue $env:MARU_API_PORT)
`$env:MARU_AI_PHOTO_MODEL = $(Quote-PowerShellValue $env:MARU_AI_PHOTO_MODEL)
`$env:MARU_AI_PHOTO_QUALITY = $(Quote-PowerShellValue $env:MARU_AI_PHOTO_QUALITY)
python python-backend/server.py
"@
  Start-Process powershell -ArgumentList @("-NoExit", "-ExecutionPolicy", "Bypass", "-Command", $backendCommand) -WindowStyle Normal
} else {
  Write-Host "API server already appears to be listening on port $ApiPort."
}

if (-not $existingWeb) {
  $frontendCommand = @"
Set-Location $(Quote-PowerShellValue $Root)
python -m http.server $WebPort --bind 127.0.0.1
"@
  Start-Process powershell -ArgumentList @("-NoExit", "-ExecutionPolicy", "Bypass", "-Command", $frontendCommand) -WindowStyle Normal
} else {
  Write-Host "Frontend server already appears to be listening on port $WebPort."
}

Start-Sleep -Seconds 2
$frontendUrl = "http://127.0.0.1:$WebPort/ai-photo.html"
Write-Host "MARU PWA demo: $frontendUrl"
Write-Host "API health: http://127.0.0.1:$ApiPort/api/health"
Start-Process $frontendUrl
