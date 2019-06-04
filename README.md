# mvp-ts

Bare minimum TypeScript project, with browser build & code quality checks

### Supports

- Type checking - `TypeScript`
- Linting - `TSLint`
- Formatting - `Prettier`
- Bundling - `Parcel`
  - Dev server (+ hot module replacement)
  - Transpilation (+ sourcemaps)
    - `TypeScript` -> `ES5`
    - `SCSS` -> `CSS`
  - Runtime support
    - `import()` & code splitting
    - Babel `async`/`await` & generators
    - CoreJS polyfills (`Map`, `Set`, etc)
  - Production build
    - tree shaking
    - dead code elimination
    - minification

## Scripts

### Installation

```sh
npm install
```

### Development

```sh
# Dev Server
npm run dev # parcel dev server + watch (outputs to dev/)

# Type Checking
npm run tsc # typescript compiler + watch (no emit, types only)

# Unit Tests
npm run test # jest + watch (targets src/**/*.spec.ts)

# Production Build
npm run build # (outputs to docs/)
```

### Formatting & Linting _(optional - most editors can run these)_

```sh
npm run fix # prettier & tslint --fix (on src/)

npm run prettier # prettier (on src/)
npm run tslint # tslint --fix (on src/)
```

### Parcel debugging

```sh
npm run clean # remove .cache/ + dev/
```

## Dependencies

### Runtime

```jsonc
"dependencies": {
  // CoreJS runtime polyfills
  "@babel/runtime-corejs2": "7.4.4",

  // [optional] React+DOM
  "react": "16.8.6",
  "react-dom": "16.8.6",
}
```

### Development

```jsonc
"devDependencies": {
  // Babel core compiler
  "@babel/core": "7.4.4",

  // Babel transform for runtime async/await, generators, polyfills
  "@babel/plugin-transform-runtime": "7.4.4",

  // [optional] React type definitions
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

## Config

### `.babelrc`

This file configures Babel, which Parcel uses for transpilation

```jsonc
{
  // This adds runtime support for async/await, generators, and polyfills
  "plugins": [["@babel/plugin-transform-runtime", { "corejs": 2 }]]
}
```

### `.prettierrc`

This files configures the Prettier auto-formatter

```jsonc
{
  // [fact] This reduces git diff churn
  "trailingComma": "all",
  // [opinion] Single quotes for life!
  "singleQuote": true,
  // [opinion] Semicolons are just noise!
  "semi": false
}
```

### `tsconfig.json`

This files configures the TypeScript compiler

```jsonc
{
  "compileOnSave": true,
  "compilerOptions": {
    // Allow default imports like `import React from 'react'`
    "allowSyntheticDefaultImports": true,
    // Adds safety when working across OS / filesystems
    "forceConsistentCasingInFileNames": true,
    // Optional: Only needed if you're using React
    "jsx": "react",
    // These 3 are required for dynamic imports
    "moduleResolution": "node",
    "module": "esnext",
    "target": "esnext",
    // Alert on unused variables
    "noUnusedLocals": true,
    // Alert on unused arguments
    "noUnusedParameters": true,
    // Enable ALL strict flags
    "strict": true
  },
  "exclude": ["node_modules"]
}
```

### `tslint.json`

This files configures the TSLint linter

```jsonc
// TODO
```
