![PayEx logo](./src/img/px-logo.svg)

# design.payex.com

[![Version](https://img.shields.io/badge/Version-0.10.18-blue.svg)](https://ci.appveyor.com/project/erikhallaraaker/design-payex-com/branch/master)
[![Build status](https://ci.appveyor.com/api/projects/status/1dii19sqw1m7xtsn/branch/master?svg=true)](https://ci.appveyor.com/project/PayEx/design-payex-com/branch/master)
[![dependencies Status](https://david-dm.org/payex/design.payex.com/status.svg)](https://david-dm.org/payex/design.payex.com)
[![devDependencies Status](https://david-dm.org/payex/design.payex.com/dev-status.svg)](https://david-dm.org/payex/design.payex.com?type=dev)

## Installing / Getting started

The installation guides in this file is for further development of the DesignGuide, and is not necessary if you plan to use the DesignGuide in your project.

### Prerequisites

DesignGuide requires [Node.js](https://nodejs.org/en/) (includes npm).

### Installing

1. Open a terminal and navigate to repo root
1. `npm install`
1. `npm start`
    * If encountering an error, you might need to install [webpack-dev-server](https://github.com/webpack/webpack-dev-server) globally. You can do this by running the command `npm i webpack-dev-server -g`.
1. Go to <http://localhost:3000>
1. Works? If not, contact us on Slack ([#design-guide-general](https://payex.slack.com/messages/C0L3W8B2S/)).
1. Get to work.

## Developing

### Built with

* [React 16.3](https://reactjs.org/)
* [Less 2.7](http://lesscss.org/)

### Setting up Dev

* Running the command `npm start` starts the webpack dev server, (which is configured in `./webpack.config.js`). If any changes is made to this file, or any files directly influencing this file (i.e. any loaders or plugins) you need to restart the server.
* The script `npm start` will start the dev server in development mode. If you wish to run the dev server in production-like environment run the command `npm run start:prod`.

#### Importing components

When importing different components in the files you create, you can use shortcuts for common paths. The shortcuts are as following:

* `~` - root of the project (example `import package from "~/package";`).
* `$` - `./src`-folder (example `import px from "$/px-script";`).
* `@` - `./src/App/components`-folder (example `import Alert from "@/Alert";`).
* `#` - `./src/App/Documentation/utils`-folder (example `import { DocToc } from "#";`).

The shortcuts are specified in the `./.babelrc`-file. Specifying the prefix-shortcuts in the `./jsconfig.json`-file enables path intellisense for the shortcuts (at least in VSCode).

### Building

To start building, run the command `npm run build` to start in dev-mode, or `npm run build:prod` for production-mode. This will make webpack start bundling everything and make static files in the `./dist/`-folder. It will also run through all files in `./src/` with eslint making sure all files are without errors before building. Also make sure all tests pass, or make changes to them accordingly.
> Note: Running the command `npm run build:prod` will delete all files already located in `./dist`.

## Versioning

Design Guide uses [semantic versioning](http://semver.org/). This means that internally, Design Guide will use a `major.minor.patch` version number to signal what the changes in each release surmount to. Since `minor` and `patch` version increments means backwards compatibility will be upheld, only the `major` version number will be a part of the URL of CSS and JavaScript files. This also means both CSS and JavaScript files are versioned in lockstep, so whenever a new `major` version of the CSS is released, a new `major` version of the JavaScript will be as well.

## Tests

1. Open a terminal and navigate to repo root
1. Run the command `npm test`
    * Many of the tests are snapshot based, and runs against already created snapshots. If you need to update the snapshots due to changes run the command `npm run test:update`.
    * A test coverage report is generated after running the tests. This can be found in `./coverage`.
> Note: Snapshot testing is pretty unforgiving, so if you make __ANY__ changes to how a component, which already has a snapshot, is rendered, the tests __WILL__ crash! So make sure to run `npm run test:update` before committing.

## Code style

Coding style rules set in `./.eslintrc` & `./.stylelintrc`.

__*Make sure to follow the syntax rules enforced by eslint & stylelint.*__

## Places to find information

* [XWiki](https://wiki.payex.com/xwiki/bin/view/Team%20Area/team-ux/Designguide/)

## Contributing

* Bug reports: File bugs as Github [issues](https://github.com/PayEx/design.payex.com/issues).
* Feature suggestions: File as Github issue or discuss the feature on Slack ([#design-guide-general](https://payex.slack.com/messages/C0L3W8B2S/)).
* Code contribtions: Code contribtions are highly encouraged, but discuss the feature/bugfix in an issue or on Slack before you start coding.

## Maintainers

* [Erik Hallaraaker](https://github.com/erikhallaraaker)
* [Håkon Mosvoll](https://github.com/hmosvoll)

## Contents of this project

* `./coverage/` - Test coverage report for the project (not commited to repo).
* `./dist/` - Static files generated by [webpack](https://webpack.js.org/).
* `./src/` - All the source files.
* `./static/` - Static files to be included in the `./dist/` folder during the build.

## Notable files

* `.babelrc` - [Babel](https://babeljs.io/) configuration.
* `.eslintignore` - List of files/directories eslint will ignore (similar to .gitignore).
* `.eslintrc` - [Eslint](https://eslint.org/) configuration.
* `.stylelintrc` - [Stylelint](https://stylelint.io/) configuration.
* `CHANGELOG.md` - Collection of changes made to the project. Insert your changes here.
* `jest.config.js` - [jest](https://facebook.github.io/jest/) configuration.
* `jest.setup.js` - Script file that will run before jest executes the tests, this includes [enzyme](http://airbnb.io/enzyme/) setup, polyfills and other useful snippets.
* `webpack.config.js` - [Webpack](https://webpack.js.org/) configuration.

## Copyright, license and credits

Code and documentation © PayEx and contributors, released under the [MIT License](LICENSE).

Inspired by [Bootstrap](http://getbootstrap.com/) and [Materialize](https://materializecss.com/).
