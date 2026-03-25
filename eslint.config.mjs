// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  sonarConfig,
  importConfig,
} from '@xylabs/eslint-config-flat'
import { reactConfig } from '@xylabs/eslint-config-react-flat'

// Packages re-exported by @xylabs/sdk-js that should not be imported directly
const sdkJsBarrelPackages = [
  '@xylabs/api',
  '@xylabs/array',
  '@xylabs/arraybuffer',
  '@xylabs/assert',
  '@xylabs/axios',
  '@xylabs/base',
  '@xylabs/bignumber',
  '@xylabs/buffer',
  '@xylabs/creatable',
  '@xylabs/decimal-precision',
  '@xylabs/delay',
  '@xylabs/enum',
  '@xylabs/error',
  '@xylabs/eth-address',
  '@xylabs/events',
  '@xylabs/exists',
  '@xylabs/forget',
  '@xylabs/function-name',
  '@xylabs/hex',
  '@xylabs/log',
  '@xylabs/logger',
  '@xylabs/object',
  '@xylabs/platform',
  '@xylabs/profile',
  '@xylabs/promise',
  '@xylabs/retry',
  '@xylabs/set',
  '@xylabs/static-implements',
  '@xylabs/storage',
  '@xylabs/telemetry',
  '@xylabs/telemetry-exporter',
  '@xylabs/timer',
  '@xylabs/typeof',
  '@xylabs/url',
  '@xylabs/zod',
]

export default [
  {
    ignores: ['.yarn', 'dist', 'build', 'docs', '**/packages/*/dist', '**/packages/*/build', '**/packages/*/docs', '**/packages/*/node_modules', 'storybook-static', '.storybook', '.claude/worktrees']},
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  sonarConfig,
  importConfig,
  {
    ...reactConfig,
    rules: {
      ...reactConfig.rules,
      'react-x/no-create-ref': ['warn'],
      'react-hooks/set-state-in-render': ['warn'],
      'react-x/use-memo': ['warn'],
    }
  },
  {
    rules: {
      'no-warning-comments': ['warn', { terms: ['note'], location: 'anywhere' }],
      '@typescript-eslint/strict-boolean-expressions': ['off'],
      '@eslint-react/no-array-index-key': ['off'],
      '@typescript-eslint/no-misused-promises': ['off'],
      'no-restricted-imports': ['error', {
        patterns: [
          './index.ts',
          '../index.ts',
          '../../index.ts',
          '../../../index.ts',
          '../../../../index.ts',
          '../../../../../index.ts',
          '../../../../../../index.ts',
          '../../../../../../../index.ts',
        ],
        paths: sdkJsBarrelPackages.map(name => ({ name, message: 'Import from @xylabs/sdk-js instead.' })),
      }],
    },
  },
  ...storybook.configs["flat/recommended"]
];
