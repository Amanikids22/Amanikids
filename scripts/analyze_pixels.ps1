Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile('images/team/binti_muzuri_amisi.jpeg')

Write-Host "Checking vertical center column (x=290):"
for ($y = 0; $y -lt 50; $y += 5) {
    $c = $img.GetPixel(290, $y)
    Write-Host "y=${y} - R=$($c.R) G=$($c.G) B=$($c.B)"
}

Write-Host "`nChecking horizontal row (y=100) from left edge:"
for ($x = 0; $x -lt 50; $x += 5) {
    $c = $img.GetPixel($x, 100)
    Write-Host "x=${x} - R=$($c.R) G=$($c.G) B=$($c.B)"
}

Write-Host "`nChecking bottom area (x=290) from y=550 to 723:"
for ($y = 550; $y -lt 724; $y += 10) {
    $c = $img.GetPixel(290, $y)
    Write-Host "y=${y} - R=$($c.R) G=$($c.G) B=$($c.B)"
}

$img.Dispose()
