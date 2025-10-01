// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  sonarConfig,
  importConfig
} from '@xylabs/eslint-config-flat'
import { reactConfig } from '@xylabs/eslint-config-react-flat'

export default [
  {
    ignores: ['.yarn', 'dist', 'docs', '**/packages/*/dist', 'storybook-static', 'eslint.config.mjs', '.storybook'],
  }, 
  unicornConfig, 
  workspacesConfig, 
  rulesConfig, 
  typescriptConfig,
  importConfig, 
  sonarConfig,
  reactConfig, 
  {
    rules: {
      'sonarjs/redundant-type-aliases': ['off'],
      'import-x/no-internal-modules': ['off'],
      'sonarjs/prefer-single-boolean-return': ['off'],
    },
  },
  {
  rules: {
    ...reactConfig.rules,
    '@eslint-react/no-array-index-key': ['off'],
    '@eslint-react/no-prop-types': ['warn'],
    '@eslint-react/prefer-destructuring-assignment': ['warn'],
  },
}, {
  rules: {
    ...typescriptConfig.rules,
    '@typescript-eslint/no-misused-promises': ['warn'],
    '@typescript-eslint/consistent-type-imports': ['warn']
  },
}, ...storybook.configs["flat/recommended"]];
