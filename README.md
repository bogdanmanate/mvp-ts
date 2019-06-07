# `mvp-web-ts`

Production-ready TypeScript with minimal config — for public web

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
- Configuration
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

From `package.json`

#### Installation

```sh
npm install
```

#### Development

```sh
# parcel dev server + watch
# (outputs to dev/)
npm run dev

# typescript compiler + watch
# (no emit, types only)
npm run tsc

 # jest + watch
 # (on *.spec.ts files)
npm run test
```

#### Production

```sh
# parcel production build
# (outputs to docs/)
npm run build
```

#### Formatting & Linting _(optional - most editors can run these)_

```sh
npm run fix # all
npm run prettier # prettier
npm run tslint # tslint --fix
```

## Dependencies

From `package.json`

#### Development

```jsonc
// Babel core compiler
"@babel/core": "7.4.4",

// Babel transform for async/await, generators, polyfills
"@babel/plugin-transform-runtime": "7.4.4",

// [optional:react] React type definitions
"@types/react": "16.8.19",
"@types/react-dom": "16.8.4",

// Parcel (web app bundler)
"parcel-bundler": "1.12.3",

// Prettier (code formatting)
"prettier": "1.17.1",

// SCSS language - Very easy to swap! (just change this)
"sass": "1.20.1",

// TypeScript language
"typescript": "3.4.5"
```

#### Runtime

```jsonc
// Babel runtime + CoreJS polyfills
"@babel/runtime-corejs2": "7.4.4",

// [optional:react] React+DOM
"react": "16.8.6",
"react-dom": "16.8.6",
```

## Configuration

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

#### `.prettierrc`

For the Prettier auto-formatter

```jsonc
{
  // [fact] Reduces git diff churn
  "trailingComma": "all",

  // [opinion] Single quotes for life!
  "singleQuote": true,

  // [opinion] Semicolons are just noise!
  "semi": false
}
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

    // Allows Parcel's absolute-ish src/ imports
    // ex > import { MyThing } from '~/ui/MyThing'
    // docs > https://parceljs.org/module_resolution.html#~-tilde-paths
    // src > https://gist.github.com/croaky/e3394e78d419475efc79c1e418c243ed
    "baseUrl": "./src",
    "paths": { "~*": ["./*"] },

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
