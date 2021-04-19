#!/usr/bin/env bash

# The purpose of this file is to find out what branches are merged, delete them from git,
# then pass the branch name as an output so that our janitor can delete that branch folder from azure.

set -o errexit # Abort if any command fails

branches=$(git branch -r --merged develop)
for branch in $branches
do
    # Skip branches that are not feature branches as they are not deployed to Azure
    [[ $branch != *"feature/"* ]] && continue

    # Remove prefixes from branchname
    branch=${branch#"origin/"}

    echo "::set-output name=BRANCH_TO_DELETE::$branch"
    echo "Deleting branch $branch"

    # TODO: Use the following command once we're sure the script has been tested for a little bit
    # git push origin --delete "$branch"
done