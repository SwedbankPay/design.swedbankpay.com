# Changelog

## [3.5.0] - 2019-08-16

### Added

- Added .dialog-header and .dialog-footer to the dialog component.
- Added tab lock to dialog making it so you can't tab out of the dialog until an option is clicked.
- Added aria labels to dialog documentation to show an example of how to use dialog accessibly.
- Added .expandable-headline and .expandable-subtitle to .expandable.
- Added aria-expanded attribute to expandable script.
- Added aria-controls to expandable example.
- Added document listener adding and removing .intent-mouse on the body tag. This class disables :focus styling.
- Added window resize listener for topbar so it is closed when the window size changes.
- Added tab trapping and correct focus to the topbar nav.
- Added new outline styling for buttons when focused.

### Changed

- Made it so you don't have to include the ID on the close buttons inside Dialog.
- Changed the close button in dialog to be a button instead of an icon.
- Renamed .expandable-content to .expandable-body.
- Changed animation for expandables making it smoother.
- Changed expandable header to a button instead of a div.
- Updated nav styling to fit Swedbank Pay better.
- Updated documentation to only show recommended usage of the nav component.
- Increased hitbox for all nav variants to make the component more user friendly.
- Changed the close icon in dialog to be a button.
- Changed the close icon in the topbar to be a button.

### Fixed

- Fixed display issue with topbar for IE.
- Fixed styling issue when resizing the window with an open topbar.
