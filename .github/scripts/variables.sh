#!/bin/bash
set -o errexit # Abort if any command fails
me=$(basename "$0")

help_message="\
Generates variables based on the provided brand and ref arguments.
Usage:
    $me --brand <brand> [--ref <ref>]
    $me --help
Arguments:
    -h, --help              Displays this help screen.
    -b, --brand <brand>     The name of the brand to generate variables for.
    -r, --ref <ref>         The Git ref being built."

initialize() {
    while : ; do
        if [[ $1 = "-h" || $1 = "--help" ]]; then
            echo "$help_message"
            return 0
        elif [[ ( $1 = "-b" || $1 = "--brand" ) && -n $2 ]]; then
            brand=$2
            shift 2
        elif [[ ( $1 = "-r" || $1 = "--ref" ) && -n $2 ]]; then
            ref=$2
            shift 2
        else
            break
        fi
    done

    if [[ -z "$brand" ]]; then
        echo "No brand specified." >&2
        echo "$help_message"
        return 1
    fi
}

generate_variables() {
    if [[ "$ref" == refs/tags/* ]]; then
        version="${ref#refs/tags/}"
        echo "VERSION=$version" >> $GITHUB_OUTPUT
    # elif [[ "$ref" == refs/heads/release/* ]]; then
    #     version="${ref#refs/heads/release/}"
    #     echo "VERSION=$version" >> $GITHUB_OUTPUT
    elif [[ "$ref" == refs/heads/* ]]; then
        branch="${ref#refs/heads/}"
        echo "BRANCH=$branch" >> $GITHUB_OUTPUT
    fi

    echo "Ref:      $ref"
    echo "Branch:   $branch"
    echo "Version:  $version"
    echo "Brand:    $brand"

    if [ "$brand" == "payex" ]; then
        echo "BRAND_NAME=PayEx" >> $GITHUB_OUTPUT
        echo "AZURE_ACCOUNT_PROD=payexdesignguide" >> $GITHUB_OUTPUT
        echo "AZURE_ACCOUNT_STAGE=pxdesignguidestage" >> $GITHUB_OUTPUT
        echo "BUILD_SCRIPT=build:prod:payex" >> $GITHUB_OUTPUT
    elif [ "$brand" == "swedbankpay" ]; then
        echo "BRAND_NAME=SwedbankPay" >> $GITHUB_OUTPUT
        echo "AZURE_ACCOUNT_PROD=swedbankpaydesignguide" >> $GITHUB_OUTPUT
        echo "AZURE_ACCOUNT_STAGE=spdesignguidestage" >> $GITHUB_OUTPUT
        echo "BUILD_SCRIPT=build:prod" >> $GITHUB_OUTPUT
    else
        echo "Unknown brand '$brand'!"
        return 1
    fi
}

main() {
    initialize "$@"
    generate_variables
}

main "$@"