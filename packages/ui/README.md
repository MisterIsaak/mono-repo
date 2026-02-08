# @misterisaak/ui

Vue 3 component library with utilities and composables.

## Installation

```bash
pnpm add @misterisaak/ui
```

## Usage

### Import everything

```ts
import { useExample, capitalize } from '@misterisaak/ui'
```

### Import from submodules

```ts
import { useExample } from '@misterisaak/ui/composables'
import { capitalize } from '@misterisaak/ui/utilities'
```

## Development

The package uses conditional exports to provide optimal development experience:
- In development mode, it exports source files for HMR
- In production, it exports built files from dist/

## Composables

### useExample

Example composable for counter functionality.

```ts
import { useExample } from '@misterisaak/ui/composables'

const { count, increment, decrement } = useExample()
```

## Utilities

### capitalize

Capitalize the first letter of a string.

```ts
import { capitalize } from '@misterisaak/ui/utilities'

capitalize('hello') // 'Hello'
```

## License

MIT
