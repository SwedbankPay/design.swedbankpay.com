#!/usr/bin/env bash
# set -o errexit # Abort if any command fails
me=$(basename "$0")
help_message="\
Usage:
  $me <version>

Arguments:
  version   The version of the current release."

version=$1

if [ -z "$version" ]; then
    echo "Missing required argument <version>."
    echo "$help_message"
    exit 1
fi

echo "Updating changelog for release ${version}"

release_notes=`cat RELEASE-NOTES.md`
changelog=`sed "s/^# Changelog//" CHANGELOG.md`

begin_notes="<!--- Begin Release ${version} -->"
end_notes="<!--- End Release ${version} -->"

if grep -F "Begin Release ${version}" CHANGELOG.md
then
    echo "Rewriting release ${version} notes."

    new_changelog=`sed '1,/'"${end_notes}"'/d' CHANGELOG.md`

    echo "# Changelog

$begin_notes
$release_notes
$end_notes
$new_changelog" > CHANGELOG.md
else
    echo "Adding ${version} notes."
    echo "# Changelog

$begin_notes
$release_notes
$end_notes $changelog" > CHANGELOG.md
fi

git config user.name github-actions
git config user.email github-actions@github.com
git add .
git commit -m "Update changelog"
git status
git push
