# Push artifacts to appveyor
Push-AppveyorArtifact "artifacts/Swedbankpay.DesignGuide.v$($Env:GitVersion_FullSemVer).zip"
Push-AppveyorArtifact "artifacts/Payex.DesignGuide.v$($Env:GitVersion_FullSemVer).zip"