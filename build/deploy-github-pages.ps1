# Store content of CHANGELOG.md in env variable
$Env:changelog = [IO.File]::ReadAllText("C:\projects\design-swedbankpay-com\CHANGELOG.md")

# Push artifact to appveyor
Push-AppveyorArtifact "dist/$Env:basename/release/SwedbankPay.DesignGuide.v$($Env:GitVersion_FullSemVer).zip"

# Deploy to gh-pages
Write-Host "Starting deploy to gh-pages"
git config --global credential.helper store
git config --global user.email $Env:github_email
git config --global user.name "payex-dev"
Add-Content "$Env:USERPROFILE\.git-credentials" "https://$($Env:access_token):x-oauth-basic@github.com`n"
git checkout -f gh-pages
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode) }
xcopy dist\* . /sy
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode) }
git add .
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode) }
git commit -m "GitHub release $Env:GitVersion_FullSemVer"
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode) }
git push
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode) }

# Switch back to original branch
Write-Host "Switching branch to $Env:GitVersion_BranchName"
git checkout -f $Env:GitVersion_BranchName
if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode) }
