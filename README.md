# mvp-ts

This is an experiment using Parcel Bundler to assemble a "Minimum Viable Project" for TypeScript on the web.

#### What is "viable"?

With minimum config, we want a production-ready project, with a full quality dev & build.

#### Why Parcel?

Parcel requires zero configuration of its own (other than dev/prod build settings passed as `--flags` to its CLI tool). Instead, it relies entirely on 3rd party config files, such as Babel's `.babelrc` and TypeScript's `tsconfig.json`.

## Project Requirements

#### Non-Browser Languages

- TypeScript
- SCSS

#### Development Environment

- Development Server
- Source Maps
- Code formatting
  - Prettier
  - TSLint
  - Stylelint

#### Production Build

- Transpilation
- Minification
- Tree Shaking
- Dynamic Imports
- Code Splitting
- Polyfills

## Scripts

```sh
# Installation
npm install  #  download all dependencies

# Development
npm run dev   # dev server     → Parcel dev server   + watch  (outputs to dev/)
npm run tsc   # type checking  → TypeScript compiler + watch  (no emit, types only)
npm run test  # unit tests     → Jest tests          + watch  (on *.spec.ts files)

# Production
npm run build  # parcel production build  (outputs to docs/)

# Code formatting (optional: most editors can handle these themselves)
npm run format        # run all formatters
npm run format:watch  # run all formatters + watch
# singles -----------------------------------------------
npm run prettier      # just run prettier --write
npm run stylelint     # just run stylelint --fix
npm run tslint        # just run tslint --fix
```

## NPM Dependencies

#### Runtime

```sh
# Babel generator runtime + CoreJS polyfills
@babel/runtime-corejs2

# React [optional]
react
react-dom
```

#### Development

```sh
# Languages
sass # SCSS
typescript

# Parcel
parcel-bundler

# Babel
@babel/core # compiler core
@babel/plugin-transform-runtime # for async/await, generators, polyfills

# Formatters
prettier # style auto-formatter
stylelint # stylesheet linter
tslint # typescript linter

# React types [optional]
@types/react
@types/react-dom
```

## Project Config Files

```sh
tsconfig.json    # For the TypeScript compiler

.babelrc         # For Babel, used by Parcel for transpilation
.browserslistrc  # For Babel preset-env browser targets

.prettierrc      # For the Prettier auto-formatter
.stylelintrc     # For the StyleLint linter
tslint.json      # For the TSLint linter
```
