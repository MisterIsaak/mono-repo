# mono-repo

A monorepo for building Vue 3 component libraries with Vite + Rolldown.

## Features

- ⚡️ Vite + Rolldown for fast builds
- 🔥 HMR from TypeScript source in development
- 📦 Conditional exports (dev uses source, prod uses built files)
- 🎨 Vue 3.5+ support
- 📝 Full TypeScript support
- 🧪 Vitest for testing
- 📚 pnpm workspaces with catalog protocol

## Structure

```
mono-repo/
├── packages/
│   └── ui/           # @misterisaak/ui component library
└── apps/
    └── demo/         # Demo application
```

## Setup

### Prerequisites

- Node.js v22.13.1 (see `.nvmrc`)
- pnpm 9.x or later

### Installation

```bash
# Install dependencies
pnpm install

# Start demo app in development mode
pnpm dev

# Build library
pnpm build

# Build all packages
pnpm build:all

# Run type checking
pnpm typecheck

# Run tests
pnpm test

# Clean all build artifacts
pnpm clean
```

## Development

The monorepo uses conditional exports for optimal development experience:
- **Development**: Demo app imports directly from library source with HMR
- **Production**: Built library is used with optimized output

## Packages

### @misterisaak/ui

Vue 3 component library with utilities and composables.

See [packages/ui/README.md](./packages/ui/README.md) for details.

### demo

Demo application showcasing the component library.

## License

MIT
