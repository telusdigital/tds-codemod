# TDS-Codemod

TDS Codemod scripts. This repository contains a transform file to be used with [jscodeshift][facebook-jscodeshift] to
facilitate in the upgrade from the [TDS][tds-github] v1.y.z mono-package to split packages by refactoring import
statements programatically.

## Usage for projects running TDS v0.34.z or earlier

It is not recommended upgrade to split packages from these versions due to the removal of global CSS and some former
React components. Before using this codemod, it is recommended to upgrade to TDS 1.0.z by following the
[TDS v1.0.0 migration guide][migration].

## Usage for projects running TDS v1.y.z

### Requirements

* Node 8 or greater
* yarn or npm (Instructions assume yarn)

1. Clone this repository locally
2. Install jscodeshift CLI: `yarn global add jscodeshift`
3. Transform your project files by running the following command, adjust paths as needed:
   ```sh
   jscodeshift ~/path/to/your/project/ui/src/ --extensions jsx -t ./src/transform.js
   ```
4. Remove the former TDS package from your project: `yarn remove @telusdigital/tds`
5. Add missing dependencies for the new split-versioned components. To help list missing dependencies, you can
   run [depcheck](https://www.npmjs.com/package/depcheck) on your project's directory that contains _package.json_
   ```sh
   yarn global add depcheck
   depcheck
   # copy all the @tds/core-component package names
   yarn add <list of TDS components>
   ```

## Wish List

* add instructions for CSS packages
* gracefully upgrade projects on TDS <= 0.34.z by skipping incompatible modules such as Grid, but upgrading others
* add or remove dependencies automatically

[facebook-jscodeshift]: https://github.com/facebook/jscodeshift
[tds-github]: https://github.com/telusdigital/tds
[migration]: https://github.com/telusdigital/tds/releases/tag/v1.0.0
