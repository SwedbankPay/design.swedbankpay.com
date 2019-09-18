# Push artifact to appveyor
Push-AppveyorArtifact "dist/$Env:basename/release/Swedbankpay.DesignGuide.v$($Env:GitVersion_FullSemVer).zip"