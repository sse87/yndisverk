
# Matverk

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The site is live here: https://sse87.github.io/matverk/

## Features

* Select your name and see what meal you have selected for the week
* Current weekday is highlighted
* "Login" is saved to localStorage so the site will remember you
* PWA ready (it works offline and it will ask to install when running on mobile devices)
* When running an old version, app will show message about the new version
* Add statistics on your selection

## Next
* Implement login via gmail with firebase api

## Contributing

Contributions, issues and feature requests are very welcome. If you changed something or fixed a bug for yourself, please consider submitting a PR!

## Development

### Pre-requisites

* Node
* Yarn or npm
* StandardJS extension (optional), here is [VSCode extention link](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

### Clone, install (dependencies) and run a dev build locally:

```bash
> git clone https://github.com/sse87/matverk.git

> cd listlist

> yarn install

> yarn start
```

### Build web app for production

```
yarn run build
```

### Deploy via gh-pages

```
yarn run deploy
```

Script will run a build before deploy

## Technologies & libraries

* [React](https://github.com/facebook/react)
* [Create React App](https://github.com/facebook/create-react-app)
