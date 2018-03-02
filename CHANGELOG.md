# Changelog

All notable changes to this project will be documented in this file.

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
