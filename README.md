[![logo][]](https://xylabs.com)

# @xylabs/sdk-react

[![main-build][]][main-build-link]
[![npm-badge][]][npm-link]
[![codacy-badge][]][codacy-link]
[![codeclimate-badge][]][codeclimate-link]
[![snyk-badge][]][snyk-link]

> XY Labs generalized React library 

## Table of Contents

-   [Description](#description)
-   [Install](#install)
-   [Scripts](#scripts)
-   [Maintainers](#maintainers)
-   [License](#license)
-   [Credits](#credits)

## Description

Common React code that is used throughtout XYO projects that use React.

Features:

- Mono-repo that publishes individual packages to npm
- Fully written in TypeScript
- Tree-shaking focused; include only what you need during bundling
- UI components built from the mui library
- Crypto utilities backed by the Ethers.js library

## Install

Using npm:

```sh
npm i --save @xylabs/sdk-react
```

Using yarn:

```sh
yarn add @xylabs/sdk-react
```

## Scripts

See [ts-scripts-yarn3](https://github.com/xylabs/ts-scripts-yarn3/blob/main/README.md) for
list of shared scripts. The below scripts are custom scripts for this repo.

### Build (Storybook)

Build the static Storybook site

```sh
yarn build-storybook
```

### Start

Starts the project in the browser for testing, with auto reload using Storybook

```sh
yarn start
```

## Maintainers

-   [Arie Trouw](https://github.com/arietrouw) [arietrouw.com](https://arietrouw.com)

## License

See the [LICENSE](LICENSE) file for license details

## Credits

[Made with 🔥and ❄️ by XY Labs](https://xylabs.com)

[logo]: https://cdn.xy.company/img/brand/XYPersistentCompany_Logo_Icon_Colored.svg

[main-build]: https://github.com/xylabs/sdk-react/actions/workflows/build.yml/badge.svg
[main-build-link]: https://github.com/xylabs/sdk-react/actions/workflows/build.yml

[npm-badge]: https://img.shields.io/npm/v/@xylabs/sdk-react.svg
[npm-link]: https://www.npmjs.com/package/@xylabs/sdk-react

[codacy-badge]: https://app.codacy.com/project/badge/Grade/c2a69d4530ed4b7da6ddb070169dd339
[codacy-link]: https://www.codacy.com/gh/xylabs/sdk-react/dashboard?utm_source=github.com&utm_medium=referral&utm_content=xylabs/sdk-react&utm_campaign=Badge_Grade

[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c461e0bc2b00c0b01ac0/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-react/maintainability

[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-react/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-react?targetFile=package.json
