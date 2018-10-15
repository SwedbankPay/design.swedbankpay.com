if (($Env:APPVEYOR_REPO_TAG -eq "true") -and ($Env:GitVersion_BranchName -eq "master")) {
    $Env:release = "true"
    $Env:basename = "v/$GitVersion_SemVer"

    # Replace placeholder with api-token in .sentryclirc
    (Get-Content C:\projects\design-payex-com\.sentryclirc).replace("<token>", $Env:sentry_token) | Set-Content C:\projects\design-payex-com\.sentryclirc

} elseif ($Env:GitVersion_BranchName -eq "develop") {
    $Env:release = "false"
    $Env:basename = "dev"
} else {
    $Env:release = "false"
    $Env:basename = "$Env:GitVersion_BranchName"
}
