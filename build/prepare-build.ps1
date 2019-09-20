if (($Env:APPVEYOR_REPO_TAG -eq "true") -and ($Env:GitVersion_BranchName -eq "master")) {
    $Env:release = "true"
    $Env:basename = "v/$Env:GitVersion_SemVer"

    # Replace placeholder with api-token in .sentryclirc
    (Get-Content C:\projects\design-swedbankpay-com\.sentryclirc).replace("<token>", $Env:sentry_token) |
    Set-Content C:\projects\design-swedbankpay-com\.sentryclirc

} else {
    $Env:release = "false"
    $Env:basename = $Env:GitVersion_BranchName
}
