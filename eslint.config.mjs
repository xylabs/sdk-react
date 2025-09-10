// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.mjs

import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  importConfig
} from '@xylabs/eslint-config-flat'
import { reactConfig } from '@xylabs/eslint-config-react-flat'

export default [{
  ignores: ['.yarn', 'dist', 'docs', '**/packages/*/dist', 'storybook-static', 'eslint.config.mjs', '.storybook'],
}, reactConfig, unicornConfig, workspacesConfig, rulesConfig, importConfig, {
  ...reactConfig,
  rules: {
    ...reactConfig.rules,
    '@eslint-react/no-array-index-key': ['off'],
    '@eslint-react/no-prop-types': ['warn'],
    '@eslint-react/prefer-destructuring-assignment': ['warn'],
    '@eslint-react/prefer-shorthand-boolean': ['warn'],
  },
}, {
  ...typescriptConfig,
  rules: {
    ...typescriptConfig.rules,
    '@typescript-eslint/no-misused-promises': ['warn'],
    '@typescript-eslint/consistent-type-imports': ['warn']
  },
}, ...storybook.configs["flat/recommended"]];
