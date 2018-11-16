# Changelog

## [0.14.0] - 2018-11-16

### Added

- Added new table variant table-condensed.
- Added panel-table for displaying a table taking up the full width of a panel.
- Added flex utility class `.justify-content-evenly` for `justify content: space-evenly`.
- Added payment icons to DesignGuide (located under core).
- Added Slab component.

### Changed

- Changed `.alert-default` to have a thicker border-left.
- Step bar component has been renamed to steps and recieved an overhaul.
- Topbar has been simplified therefore some parts have been deprecated.
- Well has been absorbed by slab.

### Fixed

- Fixed bug where an opened collapsed tab would close when clicking the container without clicking a list item.
- Fixed issue with disabled loading button not displaying properly (#61).
- Fixed a bug that would cause the rangeslider script to generate one style tag for each rangeslider component on a given page.
- Fixed an issue with faulty grid baserules.
- Fixed issue with icons not aligning properly with text inside block-level buttons.
- Fixed an issue with button icon margin.

### Removed

- Removed well component, use `.slab .slab-well` instead.
