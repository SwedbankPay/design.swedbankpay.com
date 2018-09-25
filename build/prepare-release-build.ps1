if (($Env:APPVEYOR_REPO_TAG -eq "true") -and ($Env:GitVersion_BranchName -eq "master")) {
    $Env:release = "true"

    # Replace placeholder with api-token in .sentryclirc
    (Get-Content C:\projects\design-payex-com\.sentryclirc).replace("<token>", $Env:sentry_token) | Set-Content C:\projects\design-payex-com\.sentryclirc

} else {
    $Env:release = "false"
}
