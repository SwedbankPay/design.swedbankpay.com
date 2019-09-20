# Avoid deploying PR's as they do not have access to secrets
if ($Env:GitVersion_PreReleaseLabel -NotMatch "PullRequest" -And $Env:GitVersion_PreReleaseLabel -NotMatch "dependabot") {

    # Setup artifacts
    ./build/artifacts-setup.ps1
    
    # TODO: Run functional tests etc here [EH]
} else {
    Write-Host "Pull request or dependabot branch, skipping deploy."
}
