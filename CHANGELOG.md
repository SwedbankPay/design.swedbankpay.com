# Changelog

## [0.11.0] - 2018-09-25

### Added

- Added new list component, item-list, and updated documentation.
- Added icon to datepicker.

### Changed

- Made some minor styling changes to button component.
- Changed breadcrumb component to only display text, removed most of the styling.
- Made some minor styling changes to description table.
- Made some slight changes to checkbox/radio button positioning.
- Made some minor style changes to alert component.
- Marked Action List and Tabs components as experimental.
- Changed default anchor color from green to blue, also added a border bottom of 2px that disappears on hover.
- Changed markup produced by `data-button-loader`.

### Fixed

- Fixed an issue with datepicker not displaying within sheet.
- Fixed an issue with sheet not being scrollable.
- Fixed an issue with loader button not displaying properly when inside a dialog footer.
- Fixed an issue with sheet that made it appear instantaneous on the initial open.
- Fixed a minor styling issue with action list within table.
- Fixed issue with selects appearing "glossy" on safari.
- Fixed issue with select tag with attribute `multiple` not being rendered properly.
- Fixed issue with click event on loader-button.
- Fixed an issue with tooltip outline being visible when not hovering parent element while parent element has focus.

### Removed

- Removed tabs component from px-script, users will now have to add/remove class `active` manually. (This is to better handle redirects).
