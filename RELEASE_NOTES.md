# Changelog

## [10.8.2] - 30.04.2023

## Component changes

- continue migration from LESS variables to CSS custom properties

  - margins
  - paddings
  - diverse from global
  - z-index variables

- remove IE support
  - remove polyfills
  - remove Babel/polyfill
  - add "not dead" to browserlist (i.e. remove IE from supported browsers)
  - remove IE-prefixed CSS declarations

## Design Guide documentation changes

## Deleted features

## Packages maintenance

- add Prettier &amp; move all stylistic rules to it, keeping linters focusing on linting

## Contributors info

- add VSCode recommended extensions
- add editor config
- ran all Prettier auto-fixable over all codebase's files
