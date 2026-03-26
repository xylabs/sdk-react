# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- Project-specific instructions for AI-assisted development. -->
<!-- Company-wide standards are in .claude/rules/xylabs-*.md (managed by yarn xy claude-rules). -->

## Overview

`@xylabs/sdk-react` is a monorepo of React component and utility packages published under the `@xylabs/react-*` scope. The umbrella package `@xylabs/sdk-react` (in `packages/sdk`) re-exports everything. All packages target the browser, use ESM, and are built on MUI (Material UI) with React 19.

## Build & Development Commands

```bash
yarn xy build          # Full build (compile + lint + deplint)
yarn xy compile        # Compile all packages
yarn xy lint           # Lint all packages
yarn xy fix            # Auto-fix lint issues
yarn start             # Start Storybook dev server on port 6006
yarn build-storybook   # Build static Storybook site
```

To compile or lint a single package:
```bash
cd packages/<name> && yarn xy compile
cd packages/<name> && yarn xy lint
```

## Architecture

- **Monorepo**: Yarn workspaces under `packages/*`, all sharing a single version
- **Package naming**: Directory `packages/foo` publishes as `@xylabs/react-foo`
- **Umbrella SDK**: `packages/sdk/src/index.ts` re-exports all packages
- **Compilation**: Each package compiles via `tsup` to `dist/browser/` (ESM `.mjs` + `.d.ts`)
- **TypeScript config**: Root `tsconfig.json` extends `@xylabs/tsconfig-react`
- **Storybook**: Stories are colocated with components as `*.stories.tsx` files; Storybook 10 with Vite

## Key Package Categories

- **Layout**: `flexbox` (FlexRow/FlexCol/BusyBox), `accordion`, `portal`
- **App shell**: `appbar`, `base-page`, `webapp`, `scroll-to-top`
- **Error handling**: `error` (ErrorBoundary, ErrorRender, ErrorReporter context)
- **Hooks & utilities**: `hooks`, `async-effect` (useAsyncEffect), `promise` (usePromise), `shared` (useLocalStorage, context utilities)
- **Theming**: `theme`, `invertible-theme`
- **Crypto/Web3**: `crypto` (wallet discovery, EthAccount components, token display), `identicon`
- **Analytics**: `mixpanel`, `pixel`, `pixel-debugger`, `experiments`
- **UI components**: `button`, `link`, `select`, `dialogs`, `cookie-consent`, `quick-tip-button`, `number-status`, `rich-result`, `common` (Breadcrumbs, Copy)

## Dependency Rules

- `zod` must always be a `peerDependency`, never a direct `dependency`

## Patterns

- Components extend MUI props via intersection types (e.g., `FlexBoxProps` extends `BoxProps`)
- Context providers follow the pattern: `Context.ts` + `Provider.tsx` + `useX.tsx` hook
- Stories use `@storybook/react-vite` with `Meta` and `StoryFn` types
- `@xylabs/react-shared` provides base types (`WithChildren`, `BusyProps`, `BoxlikeComponentProps`) used across many packages
- `@xylabs/react-async-effect` is a foundational dependency for packages that do async work in effects
