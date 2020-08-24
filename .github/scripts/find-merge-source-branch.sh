#!/usr/bin/env bash
set -o errexit # Abort if any command fails
me=$(basename "$0")
help_message="\
Usage:
  $me <sha>

Arguments:
  sha   The commit ID (SHA) of the current commit."

current_commit_id=$1

if [ -z "$current_commit_id" ]; then
    echo "Missing required argument <sha>."
    echo "$help_message"
    exit 1
fi

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

# Get the parents. Will return 3 commit IDs, the first being the current
shas=$(git rev-list --parents -n 1 "$current_commit_id")
for sha in $shas 
do
    # Skip the SHA equal to the current commit
    [[ $sha == "$current_commit_id" ]] && continue

    branches=$(git branch --contains "$sha")

    echo "$branches" | while read branch ; do
        # branch=$line

        echo "Looping through branch $branch"

        # Skip develop and master branches
        [[ $branch == *"develop" ]] && continue
        [[ $branch == *"master" ]] && continue
        
        echo "Branch folder we are looking to delete is $branch"
        echo "::set-output name=BRANCH_TO_DELETE::$branch"

        # Delete feature branch
        git push origin --delete "$branch"

    done
done
