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
    - `/styles/dg-style.css`
        - Due to a bug in webpack where a cachegroup cannot have the same name as an entry file, this filename is suffixed with `-style`
    - `/scripts/dg.js"`
    - `/scripts/dg-dashboard.js`
 - `px` and all references to this object are now: `dg`
    - E.g. `dg.script.initAll(), dg.toast() etc...`

### Fixed

### Removed
