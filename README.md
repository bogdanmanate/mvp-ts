# `mvp-ts`

Production-ready TypeScript web project, with minimal config

#### Table of Contents

- What
- Why not `create-react-app --typescript`?
- Not using React?
- Not using SCSS, or using something else?
- Scripts
  - Installation
  - Development
  - Production
  - Formatting & Linting
- Dependencies
  - Runtime
  - Development
- Configuration Files
  - `.babelrc`
  - `.browserslistrc`
  - `.prettierrc`
  - `tsconfig.json`
  - `tslint.json`

## What

A readymade web app built with `Parcel`, the zero-config web app bundler. `Parcel` isn't as fast as `Webpack` or `Rollup`, but the only config it requires is in its start command: `parcel --out-dir dev ./src/index.html`

Otherwise, `Parcel` leverages third-party config (`Babel`, `TypeScript`, etc) to get what it needs for bundling.

This project includes config for:

- Programming with `TypeScript`
- Formatting with `Prettier`
- Linting with `TSLint`
- Styling with `SCSS`\*
- Components with `React`\*

`Parcel`+`Babel` provide:

- Dev server
  - hot module replacement
  - source maps
- Transpilation
  - `TypeScript` -> `ES5`
  - `SCSS` -> `CSS`
- Runtime
  - `import()` & code splitting
  - `async`/`await` & generators
  - CoreJS polyfills (`Map`, `Set`, etc)
  - Web Worker threads
- Production
  - tree shaking
  - dead code elimination
  - minification

## Why not `create-react-app --typescript`?

This project is runtime library & framework agnostic. It can support frameworks like `React`, `Vue`, and `Angular`, but it can also be used for simple experiments with libs like `D3` and `three.js`

However, this project does come configured to support React, just in case.

## Not using React?

Remove these 5 lines

```jsonc
// package.json
"react": "16.8.6",
"react-dom": "16.8.6",
"@types/react": "16.8.19",
"@types/react-dom": "16.8.4",

// tsconfig.json
"jsx": "react",
```

## Not using SCSS, or using something else?

Remove or update this 1 line

```jsonc
// package.json
"sass": "1.20.1",
```

## Scripts

#### Installation

```sh
npm install
```

#### Development

```sh
npm run dev # parcel dev server + watch (outputs to dev/)
npm run tsc # typescript compiler + watch (no emit, types only)
npm run test # jest + watch (on *.spec.ts files)
```

#### Production

```sh
npm run build # parcel production build (outputs to docs/)
```

#### Code Formatting _(optional - most editors can handle these themselves)_

```sh
# TODO
npm run format # run all formatters
npm run prettier # run prettier
npm run stylelint # stylelint --fix
npm run tslint # run tslint --fix
```

## Dependencies

#### Development

```jsonc
// Babel core compiler
"@babel/core": "7.5.5",

// Babel transform for async/await, generators, polyfills
"@babel/plugin-transform-runtime": "7.5.5",

// [optional:react] React type definitions
"@types/react": "16.8.23",
"@types/react-dom": "16.8.4",

// Jest (test runner) + TS adapter
"@types/jest": "24.0.15",
"jest": "24.8.0",
"ts-jest": "24.0.2",

// Parcel (web app bundler)
"parcel-bundler": "1.12.3",

// Prettier (code formatting)
"prettier": "1.18.2",

// SCSS language - Very easy to swap! (just change this)
"sass": "1.22.7",

// TypeScript language
"typescript": "3.5.3"
```

#### Runtime

```jsonc
// Babel runtime + CoreJS polyfills
"@babel/runtime-corejs2": "7.5.5",

// [optional:react] React+DOM
"react": "16.8.6",
"react-dom": "16.8.6"
```

## Configuration Files

#### `.babelrc`

For Babel, used by Parcel for transpilation

```jsonc
{
  // Adds support for async/await, generators, and polyfills
  "plugins": [["@babel/plugin-transform-runtime", { "corejs": 2 }]]
}
```

#### `.browserslistrc`

For Babel `preset-env` browser targets

```sh
[development]
last 1 chrome version
last 1 firefox version

[production staging]
last 1 version
not dead
> 0.2%
```

#### `jest.config.js`

For getting Jest to work with TypeScript

```sh
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
}
```

#### `.prettierrc`

For the Prettier auto-formatter

```yaml
# [fact] Reduces git diff churn
trailingComma: 'all'

# [opinion] Single quotes for life!
singleQuote: true

# [opinion] Semicolons are just noise!
semi: false
```

#### `tsconfig.json`

For the TypeScript compiler

```jsonc
{
  "compileOnSave": true,
  "compilerOptions": {
    //
    // Module settings
    //

    // Allows dynamic import()
    "moduleResolution": "node",
    "module": "esnext",
    "target": "esnext",

    // Allows default imports from modules with no default export
    // ex > import React from 'react'
    "allowSyntheticDefaultImports": true,

    // [optional:react] Allows React JSX syntax
    "jsx": "react",

    //
    // Code quality
    //

    // Enable all strict flags
    "strict": true,
    // alwaysStrict
    // noImplicitAny
    // noImplicitThis
    // strictBindCallApply
    // strictFunctionTypes
    // strictNullChecks
    // strictPropertyInitialization

    // Prevent unused values
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    // Add safety for working between Linux/MacOS/Windows
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

#### `tslint.json`

For the TSLint linter

```jsonc
// TODO
```
