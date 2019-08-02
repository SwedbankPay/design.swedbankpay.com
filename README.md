<p align="center">
    <img src="./src/img/logo/spay_vertical_pos.svg" width=300 />
</p>

# Swedbank Pay DesignGuide

[![Version](https://img.shields.io/badge/Version-3.3.0-blue.svg)](https://github.com/swedbankpay/design.swedbankpay.com/releases/tag/3.3.0)
[![Build status](https://ci.appveyor.com/api/projects/status/1dii19sqw1m7xtsn/branch/master?svg=true)](https://ci.appveyor.com/project/PayEx/design-swedbankpay-com/branch/master)
[![codecov](https://codecov.io/gh/swedbankpay/design.swedbankpay.com/branch/develop/graph/badge.svg)](https://codecov.io/gh/swedbankpay/design.swedbankpay.com)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=SwedbankPay/design.swedbankpay.com)](https://dependabot.com)
[![dependencies Status](https://david-dm.org/swedbankpay/design.swedbankpay.com/status.svg)](https://david-dm.org/swedbankpay/design.swedbankpay.com)
[![devDependencies Status](https://david-dm.org/swedbankpay/design.swedbankpay.com/dev-status.svg)](https://david-dm.org/swedbankpay/design.swedbankpay.com?type=dev)

## Installing / Getting started

The installation guides in this file is for further development of the DesignGuide, and is not necessary if you plan to use the DesignGuide in your project.

### Prerequisites

DesignGuide requires [Node.js](https://nodejs.org/en/) (includes npm).

### Installing

1. Open a terminal and navigate to repo root
2. `npm install`
3. `npm start`
4. Go to <http://localhost:3000>
5. Works? If not, contact us on Slack ([#design-guide-general](https://payex.slack.com/messages/C0L3W8B2S/)).
6. Get to work.

### Set up Git Hooks

- Open a terminal and navigate to repo root
- Run `git config core.hooksPath .githooks`

## Developing

### Built with

- [React](https://reactjs.org/)
- [Less](http://lesscss.org/)

### Setting up Dev

- Running the command `npm start` starts the webpack dev server, (which is configured in `~/webpack.config.js`). If any changes is made to this file, or any files directly influencing this file (i.e. any loaders or plugins) you need to restart the server.
- The script `npm start` will start the dev server in development mode. If you wish to run the dev server in production-like environment run the command `npm run start:prod`.

#### Importing components

When importing different components in the files you create, you can use shortcuts for common paths. The shortcuts are as following:

- `~` - root of the project (example `import package from "~/package";`).
- `$` - `~/src`-folder (example `import px from "$/px-script";`).
- `@` - `~/src/App/components`-folder (example `import Alert from "@/Alert";`).
- `#` - `~/src/App/Documentation/utils`-folder (example `import { DocToc } from "#";`).

The shortcuts are specified in the `~/.babelrc`-file. Specifying the prefix-shortcuts in the `~/jsconfig.json`-file enables path intellisense for the shortcuts (at least in VSCode).

### Building

To start building, run the command `npm run build` to start in dev-mode, or `npm run build:prod` for production-mode. This will make webpack start bundling everything and make static files in the `~/dist/`-folder. Also make sure all tests pass, or make changes to them accordingly.
> Note: Running the command `npm run build:prod` will delete all files already located in `~/dist`.

## Versioning

DesignGuide uses [semantic versioning](http://semver.org/). This means that internally, DesignGuide will use a `major.minor.patch` version number to signal what the changes in each release surmount to. This also means both CSS and JavaScript files are versioned in lockstep, so whenever a new version of the CSS is released, a new version of the JavaScript will be as well.

## Tests

1. Open a terminal and navigate to repo root
2. Run the command `npm test`
    - Many of the tests are snapshot based, and runs against already created snapshots. If you need to update the snapshots due to changes run the command `npm run test:update`.
    - A test coverage report is generated after running the tests. This can be found in `~/coverage`.
> Note: Snapshot testing is pretty unforgiving, so if you make __ANY__ changes to how a component, which already has a snapshot, is rendered, the tests __WILL__ crash! So make sure to run `npm run test:update` before committing.

## Code style

Coding style rules set in `~/.eslintrc` & `~/.stylelintrc`.

__*Make sure to follow the syntax rules enforced by eslint & stylelint.*__

## Contributing

- Bug reports: File bugs as Github [issues](https://github.com/swedbankpay/design.swedbankpay.com/issues).
- Feature suggestions: File as Github issue or discuss the feature on Slack ([#design-guide-general](https://payex.slack.com/messages/C0L3W8B2S/)).
- Code contribtions: Code contribtions are highly encouraged, but discuss the feature/bugfix in an issue or on Slack before you start coding.

## Creating a release

Before merging to master to create a release make sure you follow these steps:

1. Make sure the linting (`npm run lint`) and unit tests pass (`npm test`).
2. Update the version in `~/package.json`
3. Make sure the changelog is correct (date and version) and only contains changes for the current release.
4. Update the version in the url to the shield image at the top of this `README.md`.
5. Commit the changes and push to `develop`.
6. Change branch to `master`.
7. Merge `develop` into `master` without fastforward (`--no-ff`).
8. Create a tag with the new commit.
9. Push the tagged commit to `master`.

AppVeyor will now create and deploy a release on both github and [design.swedbankpay.com](https://design.swedbankpay.com).

After pushing to master, complete the following steps:

1. Change back to `develop`.
2. Remove the content of changelog (leave the heading).
3. Commit the file and push it.

## Maintainers

- [Erik Hallaraaker](https://github.com/erikhallaraaker)
- [Håkon Mosvoll](https://github.com/hmosvoll)
- [Aksel Wiig](https://github.com/Akswii)

## Contents of this project

- `~/coverage` - Test coverage report for the project (not commited to repo).
- `~/dist` - Static files generated by [webpack](https://webpack.js.org/) (not commited to repo).
- `~/src` - All the source files.
- `~/build` - Config files for [AppVeyor](https://www.appveyor.com/), and other files required for the AppVeyor build process.
- `~/tools` - Various tools, mostly related to the build/deploy process.

## Notable files

- `.babelrc` - [Babel](https://babeljs.io/) configuration.
- `.eslintignore` - List of files/directories eslint will ignore (similar to .gitignore).
- `.eslintrc` - [Eslint](https://eslint.org/) configuration.
- `.sentryclirc` - [Sentry](https://sentry.io) configuration used by webpack to configure a new release on sentry.
    - _Do __not__ change the line `token = <token>`, as this placeholder is used by AppVeyor to insert the sentry api key._
- `.stylelintrc` - [Stylelint](https://stylelint.io/) configuration.
- `CHANGELOG.md` - Collection of changes made to the project. Insert your changes here.
- `jest.config.js` - [jest](https://facebook.github.io/jest/) configuration.
- `jest.setup.js` - Script file that will run before jest executes the tests, this includes [enzyme](http://airbnb.io/enzyme/) setup, polyfills and other useful snippets.
- `webpack.config.js` - [Webpack](https://webpack.js.org/) configuration.

## Copyright, license and credits

Code and documentation © Swedbank Pay and contributors, released under the [MIT License](LICENSE).

Inspired by [Bootstrap](http://getbootstrap.com/) and [Materialize](https://materializecss.com/).
