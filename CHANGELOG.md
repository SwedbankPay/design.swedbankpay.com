# Changelog

## [4.7.0] - 2020-05-29

### Added
- Code View
  - Added code-view styling
- Input Group
  - Added icon on error
- Loaders
  - Added centered loader
- Topbar
  - Made Topbar menu able to have sidebar content, tweaked Sidebar styling when inside of Topbar
- Design Guide
  - Button
    - Added .btn-link recommendation

### Changed
- Breakpoints
  - Moved to Utilities
- Buttons
  - Updated button sizes
- Forms
  - Moved height property of input to be under form-control
  - Changed styling of disabled form components
  - Changed styling of checkboxes and radio buttons
- Input Group
  - Removed color property from input-group>form-control
- Links
  - Updated Action Link for new tab color
  - Made icons top-align instead of center align verically
- Sidebar
  - Changed leaf styling when used on same level as subgroups
- Steps
  - Renamed steps in documentation
  - Updated styling
- Topbar
  - Reversed icon of topbar-link-right
- Design Guide
  - Links
    - Updated documentation
  - Forms
    - Changed to use correct code-tags component
    - Updated docs to reflect changes on has-error
  - Loaders
    - Removed invalid HTML in docs
  - Sidebar
    - Removed invalid HTML in docs
  - Code View
    - Changed styling of component to present code
  - Changed Design Guide navigation options (Sidebar and topbar)
  - Changed Design Guide navigation structure
  - Changed Home page to reflect navigational and structural changes

### Fixed
- Sheet
  - Fixed issues with Sheet producing unnecessary EventListeners
  - Fixed issues with Sheet creating duplicate objects of same instance
- Topbar
  - Fixed issues with Topbar producing unnecessary EventListeners

### Next release
- Sidebar
  - Fixed sidebar positioning making some of the content of sidebar not visible in some cases
- Steps
  - Fixed vertical clickable steps misplacement of visual elements
- Design guide
  - Added better alt text to logos in Design Guide
  - Fixed margin right of documentation content container
  - Changed styling of the sidebar, moved the contact part to the bottom
  - Added aria-hidden to all icons
  - Fixed typos
  - Grid
    - Fixed grid gutter not being updated to 32px in documentation
  - Status
    - Added example using status in Status documentation
- Status
  - Removed default status
  - Changed color of success status
  - Added a second warning status
- Typography
  - Changed h1 font size to 40px
- Datepicker
  - Fixed datepicker with time not showing time component immediately when default value is not provided 
- Forms
  - Radio buttons
    - Added visual evident hover and focus styling
    - Made using radio buttons without label content possible
  - Checkboxes
    - Added visual evident hover and focus styling
    - Made using radio buttons without label content possible
- Tabs
  - Changed styling of tabs
- Slab
  - Added slab with top border
- Accordion
  - Changed padding