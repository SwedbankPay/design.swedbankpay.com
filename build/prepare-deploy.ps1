Write-Host "Pull request number: $Env:APPVEYOR_PULL_REQUEST_NUMBER"

# Avoid deploying anything but a release.
# Github Actions will deploy develop and feature branches to azure. [THN]
if (($Env:APPVEYOR_REPO_TAG -eq "true") -and ($Env:GitVersion_BranchName -eq "master")) {
    # Deploy to github pages
    ./build/deploy-github-pages.ps1

    # TODO: Run functional tests etc here [EH]
} else {
    Write-Host "Not a release, skipping deploy."
}
