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
