# Avoid deploying PR's as they do not have access to secrets
if ($Env:GitVersion_PreReleaseLabel -NotMatch "PullRequest" -And $Env:GitVersion_PreReleaseLabel -NotMatch "dependabot") {
    # Deploy to github pages
    ./build/deploy-github-pages.ps1

    # Check response time for scripts and styles
    # npm run response-time

    # TODO: Run functional tests etc here [EH]
} else {
    Write-Host "Pull request or dependabot branch, skipping deploy."
}
