param(
  [int[]]$Ports = @(8080, 4173)
)

foreach ($port in $Ports) {
  $connections = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
  foreach ($connection in $connections) {
    if ($connection.OwningProcess) {
      Stop-Process -Id $connection.OwningProcess -Force -ErrorAction SilentlyContinue
      Write-Host "Stopped process $($connection.OwningProcess) on port $port."
    }
  }
}
