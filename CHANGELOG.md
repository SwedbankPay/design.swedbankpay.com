# Changelog

## [0.xx.x] - 2018-xx-xx

### Added

- Added alternative way to display dates to users.
- Added range selector for datepicker.
- Added multiple date selector for datepicker.

### Changed

- Replaced rome datepicker with flatpickr as rome is no longer maintained, as a result moment is no longer available through the designguide.
- Changed cards so it is no longer required to wrap cards in the `.cards` container for them to work.
- Text color utility class `.color-{name}` has been replaced with `.text-{name}`, and is deprecated.
- Renamed icons to iconography under core, and moved payment icons under material icons.
- Replaced b64 images with SVGs for `<select>`, checkbox and radio buttons.
- Changed icon classes naming so they are more consistent. Icon class names without the correct prefix (.small..) are deprecated.
- Changed how toasts are displayed in combination with sheet. They now appear to the left of sheet.

### Fixed

- Fixed issue with negative margin utility classes not being generated.
- Fixed issue with panel not taking full width on mobile screens.
- Fixed issue with gap between body and arrow in tooltips on larger screens.
- Fixed issue with documentation header not appearing on refresh.
- Fixed issue with wrong spacing in step items with anchor elements (#183).

### Removed
