# Changelog

All notable changes to this project will be documented in this file.

## [0.8.0] - 2018-07-

### Added

- Added section for colors in utilities.
- Added progress tracker component and documentation.
- Added tooltip component.
- Added media object component.
- Added action list component.

### Changed

- Changed `.background-color` utility class to `.bg-color`.
- Changed breadcrumb component to disable span elements by default, provided they are not within last-child li element.
- Reworked styling of tabs component.
- Reworked alert component.

### Fixed

- Fixed issue with hover table.

### Removed

- Removed mypayex logo option from topbar. Logo is now defaulted to standard payex logo, class `.logo-default` is no longer needed.
- Removed `.disabled` class styling for pagination component arrows. `span` elements will now act as disabled arrows.

## [0.7.1] - 2018-07-03

### Fixed

- Fixed issue with modal script crashing when not havng a tag with the attribute `data-modal-close`.
- Fixed issue with topbar, also added optional parameter to init function to better preview topbar component in documentation.
- Fixed issue with radio and checkbox components not displaying properly when using longer chunks of text in the label tag.

## [0.7.0] - 2018-07-03

### Added

- Added well component.
- Added a styling for using `text-muted` within a text-color modifyer class (i.e. `color-brand`).
- Added section about breakpoints.
- Added section about display classes.
- Added table with supported browsers in browser-support section.
- Added card component.

### Changed

- Changed the name of the alert class `alert-error` to `alert-danger` to match the other components.
- Changed alert component to `display: block` by default, no longer requiring class `in`. Close-buttons for the alert component now adds class `d-none` instead.
- Changed modal component to use class `d-block` instead of class `in`. Open/close-buttons for the modal component now toggles class `d-block` instead.
- Optimized `px-script` code for rangeslider component. It no longer triggers eventlistener for chrome-related styling in other browsers.

### Removed

- Removed class `fade` from modal for now.

### Fixed

- Fixed form components for other browsers than chrome.
- Fixed bug with breadcrumb component not rendering correctly if using spaces between `<li>`-elements.

## [0.6.0] - 2018-06-08

### Added

- Added polyfill for `Nodelist.forEach`.
- Added polyfill for `Object.assign`.
- Added badge component.
- Added utility classes for visibility.
- Added utility classes for display properties.
- Added more variants of the rangeslider.

### Changed

- Reworked grid to resemble that of Bootstrap v4.
- Refactored the rangeslider.
- Updated documentation for rangeslider.

### Fixed

- Fixed issue with documentation not being viewable in the edge and ie browsers.

## [0.5.0] - 2018-05-29

### Added

- Added section about icons.

### Fixed

- Fixed a bug with loaders not displaying properly in Firefox.

## [0.4.1] - 2018-05-24

### Fixed

- Fixed a bug with modals not closing when clicking the close-icon in the top right corner.

## [0.4.0] - 2018-05-23

### Added

- Added datepicker component.
- Added introduction.
- Added topbar component.
- Added license.
- Added versioning description to readme.
- Added Google tag manager.

### Changed

- Loader component now generates needed html for the loader itself with the attribute `data-loader`. Static html still works, but is not recommended to use with the new attribute.
- Optimized configuration for react router.
- Updated files for px-script to be self-contained, even tough webpack already does this, we might not be using webpack forever.
- Changed destination for script and styles. They are no longer named after version, but instead put in a folder with the current version (ex `/0.4.0/scripts/px.js`).
- Updated readme.
- Changed routing, so the path no longer starts with `/design.payex.com/`.

## [0.3.1] - 2018-04-19

- Removed old version of `px-script`.

## [0.3.0] - 2018-04-19

- New minor to test gitversion on teamcity.

## [0.2.1] - 2018-04-19

- Mainly changes to local dev environment and setup for teamcity, no significant changes to the documentation itself.

## [0.2.0] - 2018-04-17

### Added

- Added tabs component.

### Changed

- Refactored px-script.
- px-script no longer contains methods to manipulate components, only init methods remains for now.
- Changed base colors to properly reflect colors specified in the PayEx Graphic Manual.

## [0.1.7] - 2018-04-03

### Added

- Added status component.
- Added rangeslider component and added documentation for it in forms.
- Added styling for lists.
- Added pagination component.

## [0.1.6] - 2018-03-22

### Added

- Added utility classes for spacing.
- Added input groups.
- Added forms.
- Added webdriverio for functional testing.
- Added form components:
    - Checkbox
    - Radio button,
    - Togglebox
    - Help block
- Added validation styles for input group.
- Added styling for fieldset and legend

### Changed

- Changed checkbox, radio button and togglebox to no longer require being a child of their label.
- Changed togglebox to no longer require a `<span class="toggle">`-element, the styling is applied to `:before` and `:after` on the `<input>` element.
- Changed `ComponentPreview` component to remove trailing "`=""`" from attributes on markup generated by react's `renderToStaticMarkup` method.

## [0.1.5] - 2018-03-14

### Added

- Added panel component
- Added panel muted, this will work as a replacement for the old card component.

### Changed

- Changed webpack config to not delete `/dist` when running webpack-dev-server (`npm start`).
- Changed child-elements of panel from `<div class="panel-header">` and `<div class="panel-footer">` to `<header>` and `<footer>` (utility-classes, like `.panel-heading-right`, still apply).
- Changed child-elements of modal from `<div class="modal-header">` and `<div class="panel-footer">` to `<header>` and `<footer>` (utility-classes, like `.panel-heading-right`, still apply).

## [0.1.4] - 2018-03-13

### Added

- Added modal component
- Added tables
- Added `/dist` dir to repo for github pages

### Changed

- Changed some of the styling on typography and modal

## [0.1.3] - 2018-03-08

### Added

- Added central configuration for routes, routes are now added dynamically when configured in `./src/App/routes/`.
- Added `CONTRIBUTING.MD`.
- Added Contributing documentation component under `GettingStarted`.
- Added stylelint to project.
- Added configuration files for stylelint (`.stylelintrc` and `.stylelintignore`).

### Changed

- Changed routing logic, so that routes are now configured in the `router` directory under `App`. To add new routes simply add it to the routes array in the appropriate object. `root.js` is the four main routes, `docs.js` contains the routes for the documentation. Will add routes for examples and templates (and maybe home) when needed.
- Changed `SelectPanel` so that is now updated with the routes from `/routes/docs.js` and not from the separate adjacent `routes.js`.
- Changed Button component: Renamed prop `color` to `type`, the previous prop `type` has been renamed `btnType`.
- Changed prop `type` on Alert and Button component from `PropTypes.string` to `PropTypes.oneOf` (enum).
- Changed `npm` scripts to contain linting by stylelint

### Removed

- Removed obsolete index files from `Components`, `Core` and `GettingStarted` directories under `Documentation`, these files almost exclusively handled routing.
- Removed separate `routes.js` file from `SelectPanel` directory.
- Removed `DocView` component.

## [0.1.2] - 2018-03-02

### Added

- Added loader component.
- Added support for loader component within a button component.
- Lots of unit tests

### Changed

- The alert component's close button now no longer needs `data-close` attribute to close the alert, only `.alert-close` class is needed.
- Data attributes will be prefixed with `data-px-` from now on.

### Removed

- Ghost buttons removed from base stylesheet. Will probably be included at some point in a dedicated theme.
- Badges removed from buttons for now, might be included at some point in the future.

## [0.1.1] - 2018-02-27

### Added

- Added unit tests.
- Added polyfills for supporting Internet Explorer.
- Added breadcrumb component and documentation.
- Added alert component and documentation.
- Added button component and documentation.

### Changed

- Updated README.

## [0.1.0] - 2018-02-13

### Added

- Set up routing for the project.
- Added routes and redirects.
- Added most of the core styling from the old designguide.
- Added a changelog.

## [0.0.1] - 2018-02-09

### Added

- Set up a skeleton site for the project.
- Added Webpack for bundling/building the project
- Added testing environment with jest and enzyme.
