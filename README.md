# Swedbank Pay Design Guide

[![Version][version-badge]][version-tag]
[![Build status][appveyor-badge]][appveyor-status]
[![Codecov][codecov-badge]][codecov-status]
[![Dependabot Status][dependabot-badge]][dependabot]
[![Dependencies Status][dep-badge]][dep-status]
[![devDependencies Status][devdep-badge]][devdep-status]

[![Swedbank Pay Design Guide][og-image]][swpdg]

## Installing / Getting started

```sh
npm i @swedbankpay/design.swedbankpay.com
```

### Usage

#### Javascript

You can import the entire javascript library
```javascript
import dg from "@swedbankpay/design.swedbankpay.com"
dg.script.initAll();
```
or only the components you need
```javascript
import { sheet } from "@swedbankpay/design.swedbankpay.com"
sheet.init();
```

#### CSS
```css
@import url("@swedbankpay/design.swedbankpay.com/dist/designguide/styles/swedbankpay.css");
```

#### Assets
When using the node package you also need to host assets such as fonts and icons. Copy the files at `@swedbankpay/design.swedbankpay.com/dist/designguide` to your static files.

E.g. fonts should be available at `yourdomain.com/designguide/fonts` 

Check out the documentation for more information.
## Getting started as a developer

The following guides are for further development of the Design Guide, and are
not necessary if you only plan to use the Design Guide in your project.

### Prerequisites

Design Guide requires [Node.js][nodejs] (includes npm).

### Installing

1. Open a terminal and navigate to repo root
2. `npm ci`
3. `npm start`
4. Go to `http://localhost:3000`
5. Works? If not, contact us on Slack ([`#design-guide-general`][slack] – only
   available to Swedbank Pay and PayEx employees).
6. Get to work.

### Set up Git Hooks

- Open a terminal and navigate to repo root
- Run `git config core.hooksPath .githooks`

## Developing

It is important to note that as a developer, this project supports two brands:
**Swedbank Pay** _and_ **PayEx**. [Webpack][webpack] is configured to accept a
brand flag which is used to collect different sets of theme variables.
**Swedbank Pay** is default flag. E.g. `npm start` sets the theme to
**Swedbank Pay**, while `npm run start:payex` sets the theme to … you guessed
it, **PayEx**. Check out the `package.json` file for additional scripts.

### Built with

- [React][react]
- [Less][less]

### Setting up Dev

- Running the command `npm start` starts the Webpack dev server, (which is
  configured in `~/webpack.config.js`). If any changes is made to this file, or
  any files directly influencing this file (i.e. any loaders or plugins) you
  need to restart the server.
- The script `npm start` will start the dev server in development mode. If you
  wish to run the dev server in production-like environment run the command
  `npm run start:prod`.

#### Importing components

When importing different components in the files you create, you can use
shortcuts for common paths. The shortcuts are as following:

|   Shortcut    | Description                                                                            |
| :-----------: | :------------------------------------------------------------------------------------- |
|      `~`      | root of the project (example `import package from "~/package";`)                       |
|    `@src`     | `~/src`-folder (example `import dg from "@src/scripts";`)                              |
| `@components` | `~/src/App/components`-folder (example `import Alert from "@components/Alert";`)       |
|  `@docutils`  | `~/src/App/Documentation/utils`-folder (example `import { DocToc } from "@docutils";`) |
| `@constants`  | `~/src/constants`-folder                                                               |

The shortcuts are specified in the `~/.babelrc`-file. Specifying the
prefix-shortcuts in the `~/jsconfig.json`-file enables path intellisense for
the shortcuts (at least in VSCode).

### Building

To start building, run the command `npm run build` to start in dev-mode, or
`npm run build:prod` for production-mode. This will make webpack start bundling
everything and make static files in the `~/dist/`-folder. Also make sure all
tests pass, or make changes to them accordingly.

> Note: Running the command `npm run build:prod` will delete all files already
> located in `~/dist`.

## Versioning

Design Guide uses [semantic versioning][semver]. This means that internally,
Design Guide will use a `major.minor.patch` version number to signal what the
changes in each release surmount to. This also means both CSS and JavaScript
files are versioned in lockstep, so whenever a new version of the CSS is
released, a new version of the JavaScript will be as well.

## Tests

1. Open a terminal and navigate to repo root
2. Run the command `npm test`
    - Many of the tests are snapshot based, and runs against already created
      snapshots. If you need to update the snapshots due to changes run the
      command `npm run test:update`.
    - A test coverage report is generated after running the tests. This can be
      found in `~/coverage`.

> Note: Snapshot testing is pretty unforgiving, so if you make __ANY__ changes
> to how a component, which already has a snapshot, is rendered, the tests
> __WILL__ crash! So make sure to run `npm run test:update` before committing.

## Code style

Coding style rules are set in `~/.eslintrc` & `~/.stylelintrc`.

__*Make sure to follow the syntax rules enforced by ESLint & Stylelint.*__

## Contributing

- Bug reports: File bugs as Github [issues][issues].
- Feature suggestions: File as Github issue or discuss the feature on Slack
  ([`#design-guide-general`][slack]).
- Code contributions: Code contributions are highly encouraged, but discuss
  the feature/bugfix in an issue or on Slack before you start coding.

## Creating a release

Before merging to master to create a release, make sure you follow these steps:

- Be in the `develop` branch. 
- Create a release branch where the name is the new tag. (`release/x.x.x`) 
- Update the version in `~/package.json`.
- Make sure the `CHANGELOG.md` is correct (date and version) and only contains- changes for the current release.
- Update the version in the URL of the `version-badge` and `version-tag`- at the bottom of this `README.md` file.
- Update the changelog constants on the Home page. 
- Commit the changes and create a pull request from your branch to `master`.
- When approved, rename the merge commit to `Release x.x.x` and merge.
- Change branch to `master`.
- Create and push a new tag with the new release commit.

AppVeyor will now create and deploy a release on both github and
[`design.swedbankpay.com`][swpdg].

## Core development team

- [Phung Nguyen][PhungNg]
- [Thomas Lorntzen][VikingTristan]

## Contents of this project

| Folder        | Description |
|:--------------|:------------|
| `~/coverage`  | Test coverage report for the project (not commited to the repository).
| `~/dist`      | Static files generated by [Webpack][webpack] (not commited to the repository).
| `~/src`       | All the source files.
| `~/build`     | Config files for [AppVeyor][appveyor], and other files required for the AppVeyor build process.
| `~/tools`     | Various tools, mostly related to the build/deploy process.

## Notable files

| File                | Description |
|:--------------------|:------------|
| `.babelrc`          | [Babel][babel] configuration.
| `.eslintignore`     | List of files/directories ESLint will ignore (similar to `.gitignore`)
| `.eslintrc`         | [Eslint][eslint] configuration.
| `.sentryclirc`      | [Sentry][sentry] configuration used by Webpack to configure a new release on sentry. _(Do __not__ change the line `token = <token>`, as this placeholder is used by AppVeyor to insert the sentry api key.)_
| `.stylelintrc`      | [Stylelint][stylelint] configuration.
| `CHANGELOG.md`      | Collection of changes made to the project. Insert your changes here.
| `jest.config.js`    | [jest][jest] configuration.
| `jest.setup.js`     | Script file that will run before jest executes the tests, this includes [enzyme][enzyme] setup, polyfills and other useful snippets.
| `webpack.config.js` | [Webpack][webpack] configuration.

## Copyright, license and credits

Code and documentation © Swedbank Pay and contributors, released under the [MIT License](LICENSE).

Inspired by [Bootstrap][bootstrap] and [Materialize][materialize].

  [version-badge]:      https://img.shields.io/badge/Version-6.0.1-blue.svg
  [version-tag]:        https://github.com/swedbankpay/design.swedbankpay.com/releases/tag/6.0.1
  [appveyor-badge]:     https://ci.appveyor.com/api/projects/status/1dii19sqw1m7xtsn/branch/master?svg=true
  [appveyor-status]:    https://ci.appveyor.com/project/PayEx/design-swedbankpay-com/branch/master
  [appveyor]:           https://www.appveyor.com/
  [codecov-badge]:      https://codecov.io/gh/swedbankpay/design.swedbankpay.com/branch/develop/graph/badge.svg
  [codecov-status]:     https://codecov.io/gh/swedbankpay/design.swedbankpay.com
  [dependabot-badge]:   https://api.dependabot.com/badges/status?host=github&repo=SwedbankPay/design.swedbankpay.com
  [dependabot]:         https://dependabot.com
  [dep-badge]:          https://david-dm.org/swedbankpay/design.swedbankpay.com/status.svg
  [dep-status]:         https://david-dm.org/swedbankpay/design.swedbankpay.com
  [devdep-badge]:       https://david-dm.org/swedbankpay/design.swedbankpay.com/dev-status.svg
  [devdep-status]:      https://david-dm.org/swedbankpay/design.swedbankpay.com?type=dev
  [og-image]:           https://repository-images.githubusercontent.com/191536903/4ef09b80-53ec-11ea-9f50-8fa24f706dfb
  [swpdg]:              https://design.swedbankpay.com
  [nodejs]:             https://nodejs.org/en/
  [slack]:              https://payex.slack.com/messages/C0L3W8B2S/
  [react]:              https://reactjs.org/
  [less]:               http://lesscss.org/
  [webpack]:            https://webpack.js.org/
  [semver]:             http://semver.org/
  [issues]:             https://github.com/swedbankpay/design.swedbankpay.com/issues
  [PhungNg]:            https://github.com/PhungNg
  [VikingTristan]:      https://github.com/VikingTristan
  [babel]:              https://babeljs.io/
  [eslint]:             https://eslint.org/
  [sentry]:             https://sentry.io
  [stylelint]:          https://stylelint.io/
  [jest]:               https://facebook.github.io/jest/
  [enzyme]:             http://airbnb.io/enzyme/
  [bootstrap]:          http://getbootstrap.com/
  [materialize]:        https://materializecss.com/
