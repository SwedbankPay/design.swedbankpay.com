#!/usr/bin/env bash

check_difference() {
    echo -e "======> Checking for changes in $1..."

    if [[ $(git diff HEAD@{1}..HEAD@{0} -- "$1" | wc -l) -gt 0 ]]; then

        echo -e "======> Changes in \e[33;1m$1\e[0m was found!"
        echo -e "======> Aligning you with current branch state..."

        #Run command
        $2
    else
        echo -e "======> No changes found."
    fi
}
