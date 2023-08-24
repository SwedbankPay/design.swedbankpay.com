# Changelog

## [10.8.5] - 03.07.2023

## Bug Fixes

- We reverted back the way CSS stylesheets were imported internally. It caused a regression bug, svg files would not load when imported from CSS properties (e.g. checkbox, ...). Paths resolution were failing. (not an issue for projects importing CSS via CDN, only for the ones importing styles via the local npm package)

## Component changes

### Non breaking UI changes

## Testing

- E2E tests for topbar

## Design System website

- fix a homepage UI bug (section's height)
