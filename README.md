# react-starter [![Node CI](https://github.com/amazingrv/react-starter/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/amazingrv/react-starter/actions/workflows/nodejs.yml)

A Simple react starter kit with exposed config and hooks support (for Node  16 LTS and above).

Supports client-side routing, ReduxJS, eslint with recommended lint rules, prettier and other best practices supported OOB

Currently supported config:

- exposed configuration for eslint, browserlint, babel, postcss etc.
- browserlist support with postcss for autoprefixer
- babel-preset-env, Core-JS 3 Polyfills and other most used babel plugins
- webpack loaders for eslint, font and images etc.
- support for css 3
- lodash, momentjs and respective loaders for tree-shaking support
- all optimizations applied to production build for minimum size with max performance.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot reloading mode using webpack-dev-server:

```sh
npm start
```

To create a production build:

```sh
npm run build
```

To create a development build:

```sh
npm run build:dev
```

## Running

Open the file `dist/index.html` in your browser
