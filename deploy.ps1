if (($Env:APPVEYOR_REPO_TAG -eq "true") -and ($Env:GitVersion_BranchName -eq "master")) {
    # git config --global credential.helper store
    # git config --global user.email $Env:github_email
    # git config --global user.name "payex-dev"
    # Add-Content "$env:USERPROFILE\.git-credentials" "https://$($env:access_token):x-oauth-basic@github.com`n"
    # git add --ignore-removal dist -f
    # git commit -m "GitHub release $Env:GitVersion_FullSemVer"
    # $id = git subtree split --prefix dist master
    # Invoke-Expression "git push origin $id`:gh-pages --force"
    Write-Host "Skip"
} elseif ($Env:APPVEYOR_REPO_BRANCH -eq "master") {
    Write-Host "Skipping deploy, master does not have a tag."
} else {
    Write-Host "Branch not master, skipping deploy."
}
