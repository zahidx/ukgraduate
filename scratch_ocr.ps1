Add-Type -AssemblyName System.Runtime.WindowsRuntime
$as = [System.IO.Path]::Combine((Get-Item -Path "HKLM:\SOFTWARE\Microsoft\.NETFramework").GetValue("InstallRoot"), "v4.0.30319", "System.Runtime.WindowsRuntime.dll")
if (Test-Path $as) {
    [System.Reflection.Assembly]::LoadFrom($as) | Out-Null
}

[void][Windows.Security.Cryptography.CryptographicBuffer, Windows.Security.Cryptography, ContentType=WindowsRuntime]

# Helper function to perform Windows OCR on an image file
function Get-OcrText($ImagePath) {
    if (-not (Test-Path $ImagePath)) {
        Write-Host "File not found: $ImagePath"
        return
    }
    
    $file = Get-Item $ImagePath
    $stream = [Windows.Storage.Streams.InMemoryRandomAccessStream]::new()
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    $writer = [Windows.Storage.Streams.DataWriter]::new($stream)
    $writer.WriteBytes($bytes)
    $writer.StoreAsync().GetAwaiter().GetResult() | Out-Null
    $stream.Seek(0)
    
    $decoder = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream).GetAwaiter().GetResult()
    $bitmap = $decoder.GetSoftwareBitmapAsync().GetAwaiter().GetResult()
    
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    if ($null -eq $engine) {
        Write-Host "Could not create OCR engine."
        return
    }
    
    $result = $engine.RecognizeAsync($bitmap).GetAwaiter().GetResult()
    return $result.Text
}

Write-Host "`n--- Performing OCR on media__1779270944020.png ---"
$text1 = Get-OcrText "d:\code-pu\ukgraduate\public\media__1779270944020.png"
Write-Host "Text: $text1"

Write-Host "`n--- Performing OCR on media__1779270686981.png ---"
$text2 = Get-OcrText "d:\code-pu\ukgraduate\public\media__1779270686981.png"
Write-Host "Text: $text2"

Write-Host "`n--- Performing OCR on media__1779271006046.png ---"
$text3 = Get-OcrText "d:\code-pu\ukgraduate\public\media__1779271006046.png"
Write-Host "Text: $text3"
