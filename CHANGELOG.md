# Changelog

## [6.1.0] - 16.08.2021

## Added
- Node package
  - Automatic workflow added so that a new node package is released whenever there is a new tag

## Changed
- Webpack updated and reworked
- "CDN" version of the Design Guide will no longer add a global or autoload components
  - This behavior can be added by providing the "global" or "autoload" attribute to the script tag
- Sentry reporting is no longer a part of the Design Guide library itself but rather a part of the documentation website

## Fixed
- All node packages updated except chart.js
- All tests now directly import design guide components
- Various code and tests fixed