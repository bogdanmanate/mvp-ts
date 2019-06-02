# mvp-ts

Bare minimum TypeScript project, with browser build & code quality checks

### Notes:

- Supports

## Development

```sh
# Install dependencies
npm install

# Development - Server
npm run dev # run parcel dev server + watch (outputs to dev/)

# Development - Code Quality (optional - editors can do this)
npm run tsc # run typescript compiler + watch (no emit, types only)
npm run fix # run prettier & tslint + watch (uses onchange package)

# Test
npm run test # runs jest

# Build
npm run build # (outputs to docs/)

# Extras
npm run clean # for debugging: removes .cache/ + dev/
```

## Config files

### .babelrc

This file configures Babel, which Parcel uses to transpile for browsers

```json
{
  // This allows us to use import(), async/await, Map, Set, etc
  "plugins": [["@babel/plugin-transform-runtime", { "corejs": 2 }]]
}
```

### .prettierrc

This file configures Prettier, which autoformats our code

```json
{
  // Opinion: Semicolons are just noise!
  "semi": false,
  // Opinion: Single quotes for life!
  "singleQuote": true,
  // Fact: This reduces git diff churn
  "trailingComma": "all"
}
```

### tsconfig.json

This files configures the TypeScript compiler

```json
{
  "compileOnSave": true,
  "compilerOptions": {
    // Allow default imports like `import React from 'react'`
    "allowSyntheticDefaultImports": true,
    // Allow absolute imports like `import { Thing } from 'src/Thing'`
    "baseUrl": ".",
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

### tslint.json
