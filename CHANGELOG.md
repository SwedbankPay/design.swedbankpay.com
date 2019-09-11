# Changelog

## [4.0.0] - 2019-09-04

### Added

- Build flagging
        - E.g. `npm run start:payex` or `npm run build:payex`
            - These scripts adds a PayEx brand flag which is used to fetch PayEx variables, images and icons to render DesignGuide with a PayEx theme.

### Changed

 - Project infrastructure updated to support dual branding.
    - Generic brand "less" variables
    - Generic scripts
 - Main output filenames have been renamed to
    - `/scripts/dg.js`
    - `/scripts/dg-dashboard.js`
    - `/styles/dg-style.css`
        - Due to a bug in webpack where a cachegroup cannot have the same name as an entry file (`dg`), this filename is suffixed with `-style`
 - `px` and all references to this object are now: `dg`
    - E.g. `dg.script.initAll(), dg.toast() etc...`
 - Alert colors updated
 - Input fields
    - No longer italic errors
    - Font sizes updated
    - Spacing updated
    - Height updated
 - Action links
    - Arrow spacing updated
 - Font colors
    - New gray scale
 - Expandable
    - Color updated
 - Badges
    - A single digit results in a circled badge

### Fixed

### Removed
