# Script to copy translated files to the correct location in the i18n structure
# Usage: .\copy-translation.ps1 -SourceFile "path\to\translated\file.md" -TargetSection "section" -TargetSubsection "subsection" -TargetFilename "filename.md"

param (
    [Parameter(Mandatory=$true)]
    [string]$SourceFile,
    
    [Parameter(Mandatory=$true)]
    [string]$TargetSection,
    
    [Parameter(Mandatory=$false)]
    [string]$TargetSubsection = "",
    
    [Parameter(Mandatory=$false)]
    [string]$TargetFilename = ""
)

# Set the base paths
$docsRoot = "D:\github_windows\taina-docs"
$i18nPath = "$docsRoot\i18n\es\docusaurus-plugin-content-docs\current"

# If no target filename is provided, use the source filename
if ($TargetFilename -eq "") {
    $TargetFilename = (Get-Item $SourceFile).Name
}

# Determine the target directory
$targetDir = if ($TargetSubsection -eq "") {
    "$i18nPath\$TargetSection"
} else {
    "$i18nPath\$TargetSection\$TargetSubsection"
}

# Create the target directory if it doesn't exist
if (!(Test-Path $targetDir)) {
    Write-Host "Creating directory: $targetDir"
    New-Item -Path $targetDir -ItemType Directory -Force | Out-Null
}

# Define the target file path
$targetFile = "$targetDir\$TargetFilename"

# Copy the file
Write-Host "Copying $SourceFile to $targetFile"
Copy-Item -Path $SourceFile -Destination $targetFile -Force

# Verify the copy
if (Test-Path $targetFile) {
    Write-Host "Successfully copied file to $targetFile" -ForegroundColor Green
} else {
    Write-Host "Failed to copy file to $targetFile" -ForegroundColor Red
}

Write-Host "Don't forget to update TRANSLATION_TODO.md to track your progress!"
