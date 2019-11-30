# mvp-ts

This is an experiment using Parcel Bundler to assemble a "Minimum Viable Project" for TypeScript on the web.

#### What is "viable"?

With minimum config, we want a production-ready project, with a full quality dev & build experience.

#### Why Parcel?

Parcel requires zero configuration of its own (other than dev/prod build settings passed as `--flags` to its CLI tool). Instead, it relies entirely on 3rd party config files, such as TypeScript's `tsconfig.json` and Babel's `.browserslistrc` .

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
npm run dev   # rm -rf ./dev && parcel --out-dir dev ./src/index.html
npm run tsc   # tsc --watch --noEmit
npm run test  # jest --watch

# Production (outputs to docs/)
npm run build  # rm -rf ./docs && parcel build --out-dir ./docs --public-url ./ ./src/index.html

# Code formatting (optional: most editors can handle these themselves)
npm run format    # npm run tslint && npm run prettier
npm run prettier  # prettier --write 'src/**/*.+(ts|tsx|json|html|scss)'
npm run tslint    # tslint --fix --project tsconfig.json 'src/**/*.+(ts|tsx)'
```

## NPM Dependencies

#### Development

```sh
# Languages
sass # SCSS
typescript

# Parcel
parcel-bundler

# Formatters
prettier # code style auto-formatter
tslint # typescript linter + fixer

# React types [optional]
@types/react
@types/react-dom
```

#### Runtime

```sh
# React [optional]
react
react-dom
```

## Project Config Files

```sh
tsconfig.json    # For the TypeScript compiler
.browserslistrc  # For Babel preset-env browser targets
jest.config.js   # For Jest so it can parse TypeScript
.prettierrc      # For the Prettier auto-formatter
tslint.json      # For the TSLint linter
```
