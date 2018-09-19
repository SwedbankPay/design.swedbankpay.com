if (($Env:APPVEYOR_REPO_TAG -eq "true") -and ($Env:GitVersion_BranchName -eq "master")) {
    git config --global credential.helper store
    git config --global user.email $Env:github_email
    git config --global user.name "payex-dev"
    Add-Content "$env:USERPROFILE\.git-credentials" "https://$($env:access_token):x-oauth-basic@github.com`n"
    git checkout -f gh-pages
    xcopy dist\* . /sy
    git add .
    git commit -m "GitHub release $Env:GitVersion_FullSemVer"
    git push
} elseif ($Env:APPVEYOR_REPO_BRANCH -eq "master") {
    Write-Host "Skipping deploy, master does not have a tag."
} else {
    Write-Host "Branch not master, skipping deploy."
}
