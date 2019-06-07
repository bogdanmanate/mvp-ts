# `mvp-ts`

Production-ready TypeScript with minimal config

### Why? Why not `create-react-app --typescript`?

This is an experiment for using the `Parcel` bundler, a `Webpack` alternative which claims to be zero-config.

This project adds the minimum additional config necessary to get full-featured TypeScript transpiled for the web.

### This project supports:

- Dev server
  - hot module replacement
  - source maps
- Transpilation
  - `TypeScript` -> `ES5`
  - `SCSS` -> `CSS`
- Runtime
  - `import()` & code splitting
  - Babel `async`/`await` & generators
  - CoreJS polyfills (`Map`, `Set`, etc)
- Production
  - tree shaking
  - dead code elimination
  - minification

### This project also includes:

- Type checking with `TypeScript`
- Formatting with `Prettier`
- Linting with `TSLint`
- Components with `React`\*

## Scripts

### Installation

```sh
npm install
```

### Development

```sh
# Dev server
npm run dev # parcel dev server + watch (outputs to dev/)

# Type checking
npm run tsc # typescript compiler + watch (no emit, types only)

# Unit tests
npm run test # jest + watch (targets src/**/*.spec.ts)

# Production build
npm run build # (outputs to docs/)
```

### Formatting & Linting _(optional - most editors can run these)_

```sh
# Run all
npm run fix

# Run individuals
npm run prettier # prettier
npm run tslint # tslint --fix
```

## Dependencies

### Runtime

```jsonc
"dependencies": {
  // Babel runtime + CoreJS polyfills
  "@babel/runtime-corejs2": "7.4.4",

  // [optional:react] React+DOM
  "react": "16.8.6",
  "react-dom": "16.8.6",
}
```

### Development

```jsonc
"devDependencies": {
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
}
```

## Configuration

### `.babelrc`

For Babel, used by Parcel for transpilation

```jsonc
{
  // Adds support for async/await, generators, and polyfills
  "plugins": [["@babel/plugin-transform-runtime", { "corejs": 2 }]]
}
```

### `.browserslistrc`

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

### `.prettierrc`

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

### `tsconfig.json`

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

### `tslint.json`

For the TSLint linter

```jsonc
// TODO
```

## Don't like React?

Remove all dependencies marked with `[optional:react]` in this document

### `package.json`

```jsonc
"react": "16.8.6",
"react-dom": "16.8.6",
"@types/react": "16.8.19",
"@types/react-dom": "16.8.4",
```

### `tsconfig.json`

```jsonc
"jsx": "react",
```
