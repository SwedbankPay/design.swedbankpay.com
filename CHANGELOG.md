# Changelog

## [4.4.0] - 2020-02-10

### Added
 - Logos
   - Added section presenting the different logos available
 - Sidebar
   - Added sidebar component
 - Design Guide
   - Sidebar
     - Sidebar documentation added
     - Sidebar example added

### Changed
 - Alert
   - Removed default alert
 - Core/typography
   - Removed font-weight bold property from style sheet for H1-H3
 - Favicon
   - Moved under Logos section
 - HR
   - Changed color of HR to #d4c4bc
 - Input and form groups
   - Removed has-success state. Only has-error state is shown when necessary.
   - All input fields now have a height of 48px, even when outside of Input group
 - Status
   - Changed padding of status, altering the distance between the status circle and status text
 - Topbar
   - Added hover state
   - Added more space between elements
 - Design Guide
   - Alert
     - Changed icon used in informative alert examples
   - Tables
     - Moved to components section
   - Lists
     - Moved to components section
   - Charts
     - Moved to components section
   - Design guide now uses code tags provided
   - Design guide uses list instead of table to display JavaScript documentation
   - Design guide footer removed

### Fixed
 - Action list
   - Fix action list not working on IE and Edge


### Next release
 - Grid
   - Change gutter width to 32px
 - Sidebar
   - Fix nav-leaf elements not properly aligned in IE11
 - Action list
   - Fix action list not having same background as parent element on IE11
 - Dialog
   - Escape button can now be used to close dialog
 - Lists
   - Changed bordered item list border color and style
 - Design guide
   - Forms
     - Removed unnecessary input group from examples
   - Code tags
     - Made documentation more specific, with more and better examples
 - Button
   - Updated btn-link styling
   - Removed destructive button
 - Tabs
   - Fixed tabs incorrectly showing fade on IE11 in certain scenarios
   - Changed tabs default behavior. Basic tabs now covers 100% width on chosen breakpoint
 - Action link
   - Fixed action link arrow not visible and misaligned in IE11
 - Tables
   - Changed default table to be striped
   - Added plain table as an alternative
 - Code tags
   - Added default code tags style when using html code tag
 - Alert
   - Removed turquise informative alert
   - Changed neutral alert to informative alert
