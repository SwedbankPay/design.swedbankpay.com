# Changelog

## [4.3.0] - 2020-01-14

### Added
 - PNG logo
 - Badge
   - For numbers, using Swedbank Headline instead of Arial
 - Tabs
   - With scroll, have fades on the sides to signal more tabs, and an optional scroll state control function when control of the tabs scroll behaviour is needed
 - Code tags
 - Topbar 
   - With PNG logo
 - Alert
   - Alert informative with border-color #31a3ae and background-color #e8eff9
 - Lists
   - Bullet list
 - Core/typography
   - Akkurat Mono font
   - H4-H6
   - Hero title 
   - Expandable with content from resources/typography
 - Examples using Design Guide components and utilities

### Changed
 - Charts
   - Colors and opacity changed
   - No-fill set as default
 - Badge
   - Renamed
   - Colors updated
 - Core/typography
   - Lead text
     - Changed font-family, font-size, font-weight and line-height
 - Alert
   - Changed alert-body margin
 - Design Guide
   - Body text color to #512b2b
   - Download buttons in Resources section
   - Download buttons in Templates section
   - Bordered lists examples in core/lists
     - Changed H5 to H3
   - Action list examples in core/lists and core/iconography
     - Examples use new implementation of action list
   - Core/colors
     - Main colors split into sublists
   - Dialog, Topbar and Sheet open and close functions refactored

### Fixed
 - Core/Page layout
   - Had wrong topbar height
 - Core/colors
   - Typos and naming inconsistencies

### Next release
 - Input group
   - Removed has-success state. Input group does not show success state anymore, only failed state when necessary.
   - All input fields now have a height of 48px, even when outside of Input group
 - Alert
   - Removed default alert
 - HR
   - Changed color of HR
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