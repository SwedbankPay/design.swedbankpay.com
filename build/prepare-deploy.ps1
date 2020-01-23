Write-Host "Pull request number: $Env:APPVEYOR_PULL_REQUEST_NUMBER"

# Avoid deploying PR's as they do not have access to secrets
if ($null -eq $Env:APPVEYOR_PULL_REQUEST_NUMBER -And $Env:GitVersion_PreReleaseLabel -NotMatch "dependabot") {
    # Deploy to github pages
    ./build/deploy-github-pages.ps1

    # TODO: Run functional tests etc here [EH]
} else {
    Write-Host "Pull request or dependabot branch, skipping deploy."
}
