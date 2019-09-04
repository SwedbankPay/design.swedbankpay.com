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
 - Main output filenames has been renamed to
    - `/styles/design.css"`
    - `/scripts/design.js"`
    - `/scripts/design-dashboard.js"`
 - `px` and all references to this object is now: `dg`
    - E.g. `dg.script.initAll(), dg.toast() etc...`

### Fixed

### Removed
