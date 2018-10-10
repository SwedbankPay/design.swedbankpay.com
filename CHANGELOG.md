# Changelog

## [0.12.0] - 2018-10-10

### Added

- Added class `.button-group`.
- Added Step Bar component.
- Added basic spacing utility classes with documentation section (spacing classes with breakpoints will be implemented later).

### Changed

- Updated readme with deploy/release procedure.
- Reworked tabs.
- Reworked form validation.
- Removed `margin-bottom: 3px` from button component.
- Adjusted spacing between status indicator and text in status component.

### Fixed

- Fixed issue with item-list alignment.
- Fixed issue with action list icon being visible through topbar.
- Fixed an issue with topbar component where clicking anchor links does not close the open menu.
- Fixed an issue with datepicker not displaying properly, or at all, when clicking on label.
- Fixed an issue where alert close button got properties from the new `<a>` styling (blue border bottom).
- Fixed a minor issue with toast not resetting its type, if called without a type after another toast with a type has already been called.
- Fixed an issue with open tabs not closing on screen resize.
- Fixed an issue with toast overlapping topbar.

### Removed

- Removed modal from designguide.
- Removed styling for table within panel footer.
