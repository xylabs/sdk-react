// eslint.config.mjs

import {   typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  importConfig } from '@xylabs/eslint-config-flat'
import { reactConfig } from '@xylabs/eslint-config-react-flat'

export default [
  {
    ignores: ['.yarn/**', 'jest.config.cjs', '**/dist/**', 'dist', 'build/**', 'node_modules/**', 'public', '.storybook', 'storybook-static', 'eslint.config.mjs'],
  },
  reactConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  importConfig,
  reactConfig,
  {
    rules: {
      '@eslint-react/no-array-index-key': ['warn'],
      '@eslint-react/no-prop-types': ['warn'],
      '@eslint-react/prefer-destructuring-assignment': ['warn'],
      '@eslint-react/prefer-shorthand-boolean': ['warn'],
    },
  },
  {
    ...typescriptConfig,
    rules: {
      ...typescriptConfig.rules,
      '@typescript-eslint/no-misused-promises': ['warn'],
      '@typescript-eslint/consistent-type-imports': ['warn']
    },
  }
]
