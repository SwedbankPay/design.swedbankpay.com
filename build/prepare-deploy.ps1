Write-Host $Env:GitVersion_PreReleaseLabel

if($Env:APPVEYOR_PULL_REQUEST_NUMBER) {
    Write-Host "This is a pull request"
} else {
    Write-Host "This is NOT a pull request"
}

# Avoid deploying PR's as they do not have access to secrets
if ($Env:GitVersion_PreReleaseLabel -NotMatch "PullRequest" -And $Env:GitVersion_PreReleaseLabel -NotMatch "dependabot") {
    # Deploy to github pages
    ./build/deploy-github-pages.ps1

    # TODO: Run functional tests etc here [EH]
} else {
    Write-Host "Pull request or dependabot branch, skipping deploy."
}
