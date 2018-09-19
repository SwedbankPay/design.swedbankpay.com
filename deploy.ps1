if (($Env:APPVEYOR_REPO_TAG -eq "true") -and ($Env:GitVersion_BranchName -eq "master")) {
    git config --global credential.helper store
    git config --global user.email $Env:github_email
    git config --global user.name "payex-dev"
    Add-Content "$env:USERPROFILE\.git-credentials" "https://$($env:access_token):x-oauth-basic@github.com`n"
    git checkout -f gh-pages
    if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode )  }
    xcopy dist\* . /sy
    if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode )  }
    git add .
    if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode )  }
    git commit -m "GitHub release $Env:GitVersion_FullSemVer"
    if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode )  }
    git push
    if ($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode )  }
} elseif ($Env:APPVEYOR_REPO_BRANCH -eq "master") {
    Write-Host "Skipping deploy, master does not have a tag."
} else {
    Write-Host "Branch not master, skipping deploy."
}
