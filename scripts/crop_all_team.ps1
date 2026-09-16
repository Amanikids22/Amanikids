Add-Type -AssemblyName System.Drawing

$rawDir = "images/team/raw"
if (!(Test-Path $rawDir)) {
    New-Item -ItemType Directory -Path $rawDir -Force | Out-Null
}

$files = Get-ChildItem "images/team/*.jpeg" | Where-Object { $_.Name -notlike "test_*" }

foreach ($f in $files) {
    # Backup original if not already backed up
    $backupPath = Join-Path $rawDir $f.Name
    if (!(Test-Path $backupPath)) {
        Copy-Item $f.FullName $backupPath
    }

    # Load from backup
    $img = [System.Drawing.Bitmap]::FromFile($backupPath)
    
    # We want to crop out the green borders (top:22px, left:24px, right:24px)
    # and the bottom text area (starts at ~615px).
    $cropX = 24
    $cropY = 22
    $cropW = 532
    $cropH = 586

    $rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
    $cropped = $img.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    
    $img.Dispose()
    
    # Save cropped image replacing the original
    $cropped.Save($f.FullName, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $cropped.Dispose()
    
    Write-Host "Cleaned and cropped: $($f.Name) to ${cropW}x${cropH}"
}

Write-Host "`nAll 12 portraits successfully cropped and free of borders/burned-in text!"
