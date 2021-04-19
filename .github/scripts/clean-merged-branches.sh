#!/usr/bin/env bash

# The purpose of this file is to find out what branches are merged, delete them from git,
# then pass the branch name as an output so that our janitor can delete that branch folder from azure. [THN]

set -o errexit # Abort if any command fails

# Ensure that we have all branches
git fetch --all
git branch -r | grep -v '\->' | while read remote; do
  branch_name="${remote#origin/}" 

  if git show-ref --verify --quiet "refs/heads/$branch_name" ; then
    echo "Branch '$branch_name' already exists."
  else
    echo "Adding '$branch_name' tracking '$remote'."
    git branch --track "$branch_name" "$remote";
  fi
done

git pull --ff-only --all

branches=$(git branch --merged develop)
for branch in $branches
do
    # Skip branches that are not feature branches as they are not deployed to Azure [THN]
    [[ $branch != *"feature/"* ]] && continue
    echo "::set-output name=BRANCH_TO_DELETE::$branch"
    echo "Deleting branch $branch"

    # TODO: Use the following command once we're sure the script has been tested for a little bit [THN]
    # git push origin --delete "$branch"
done