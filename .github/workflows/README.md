# GitHub Actions build and deploy

This document is meant to explain the steps to take when recovering from a disaster and also to explain the content of this folder.

## Disaster Recovery

Design Guide is hosted on Azure Storage with Locally-redundant storage (LRS). This means that Design Guide is stored with multiple copies and is protected from planned and unplanned events, including transient hardware failures, network or power outages, and massive natural disasters. For more information on redundancy and disaster recovery, check out the [redundancy documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy "Redundancy Documentation") and the [storage disaster recovery documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-disaster-recovery-guidance "Disaster Recovery Documentation")

The deploy procedure is set up to run with GitHub Actions. All workflows can be accessed within this folder.

* __GitHub repository__ needs to be specified (`SwedbankPay/design.swedbankpay.com`).
* __Default branch__ needs to be set to `master`.

The current configuration is set to make sure a pushed tag will deploy the project.

### General configuration

Setting the following GitHub secrets variables:

* `AZURE_CREDENTIALS` - Azure credentials used to authenticate with our azure containers.
* `SENTRY_TOKEN` - API key to sentry. Used by the `sentry.sh` script during release workflow.

## Workflows

Each workflow executes twice through the use of matrix. One for the Swedbank Pay brand, and one for the PayEx brand. 
The matrix brand variable is sent to the `variables.sh` script which creates certain variables that are accessible through the `variables` step output and then later used within workflows.

### Main

This workflow is executed on push in either a `feature/**` branch or in the `develop` branch. It installs, builds, tests, and deploys. The branch it deploys will be available at e.g. `design.swedbankpay.com/feature/something` or `design.swedbankpay.com/develop`.
Note: It will be deployed on both brands. Something that is available at `design.swedbankpay.com/feature/something` will also be available at `design.payex.com/feature/something`.

### Pull Request

This workflow is executed when a pull request is opened. It installs, builds, tests, and checks for size differences in files.

### Release

This workflow is executed whenever a tag is pushed. It installs, builds, tests, deploys, and creates a new release on GitHub.
