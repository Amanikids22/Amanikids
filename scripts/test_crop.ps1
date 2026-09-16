Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile('images/team/binti_muzuri_amisi.jpeg')

# Test cropping inner portrait:
# Width: 580, Height: 724
# Let's crop x: 25, y: 25, width: 530, height: 575
$cropRect = New-Object System.Drawing.Rectangle(25, 25, 530, 575)
$cropped = $img.Clone($cropRect, $img.PixelFormat)
$cropped.Save('images/team/test_binti_cropped.jpeg', [System.Drawing.Imaging.ImageFormat]::Jpeg)

$cropped.Dispose()
$img.Dispose()
Write-Host "Cropped sample created: 530 x 575"
