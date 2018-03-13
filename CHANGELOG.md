# Changelog

All notable changes to this project will be documented in this file.

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
