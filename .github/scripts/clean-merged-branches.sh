#!/usr/bin/env bash

# The purpose of this file is to find out what branches are merged, delete them from git,
# then pass the branch name as an output so that our janitor can delete that branch folder from azure.

set -o errexit # Abort if any command fails

merged_branches=$(git branch -r --merged develop)
for merged_branch in $merged_branches
do
    # Skip branches that are not feature branches as they are not deployed to Azure
    [[ $merged_branch != *"feature/"* ]] && continue
    # Remove prefixes from branchname
    branch_to_delete=${merged_branch#"origin/"}
done

if [ -z ${branch_to_delete+x} ]; then
  echo "No feature branch to clean up."
else
  echo "::set-output name=BRANCH_TO_DELETE::$branch_to_delete"
  echo "Deleting branch $branch_to_delete"
  git push origin --delete "$branch_to_delete"
fi
