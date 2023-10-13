[![logo][]](https://xylabs.com)

# @xylabs/sdk-react

[![main-build][]][main-build-link]
[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
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

Common React code that is used throughout XYO projects that use React.

Features:

-   Mono-repo that publishes individual packages to npm
-   Fully written in TypeScript
-   Tree-shaking focused; include only what you need during bundling
-   UI components built from the mui library
-   Crypto utilities backed by the Ethers.js library

## Install

Using npm:

```sh
npm i --save @xylabs/sdk-react
```

Using yarn:

```sh
yarn add @xylabs/sdk-react
```

## Documentation
[Developer Reference](https://xylabs.github.io/sdk-react)

[Storybook](https://xylabs.github.io/sdk-react/storybook)

## Scripts

Using npm:

```sh
npm xy --help
```

Using yarn:

```sh
yarn xy --help
```

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

-   [Arie Trouw](https://github.com/arietrouw) ([arietrouw.com](https://arietrouw.com))
-   [Matt Jones](https://github.com/jonesmac)
-   [Joel Carter](https://github.com/JoelBCarter)
-   [Jordan Trouw](https://github.com/jordantrouw)

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
[codacy-link]: https://app.codacy.com/gh/xylabs/sdk-react

[codeclimate-badge]: https://api.codeclimate.com/v1/badges/c461e0bc2b00c0b01ac0/maintainability
[codeclimate-link]: https://codeclimate.com/github/xylabs/sdk-react/maintainability

[snyk-badge]: https://snyk.io/test/github/xylabs/sdk-react/badge.svg?targetFile=package.json
[snyk-link]: https://snyk.io/test/github/xylabs/sdk-react?targetFile=package.json

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xylabs/react-shared
[npm-license-badge]: https://img.shields.io/npm/l/@xylabs/react-shared

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xylabs/react-shared/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xylabs/react-shared