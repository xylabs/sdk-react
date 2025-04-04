import type { KnipConfig } from 'knip'

const ignoreDependencies = [
  '@xylabs/ts-scripts-yarn3',
]

const rootIgnoreDependencies = [
  ...ignoreDependencies,
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',
  'eslint-import-resolver-typescript',
]

const entry = ['src/index.ts*', 'src/index-*.ts*', '*.ts', '*.mjs', 'scripts/**/*.*', 'bin/*', 'src/**/*.stories.ts*', 'src/**/*.spec.ts']
const project = ['src/**/*.ts*', '*.ts*']

const config: KnipConfig = {
  ignoreDependencies: rootIgnoreDependencies,
  workspaces: {
    '.': { entry: [...entry, 'src/**/*.ts', './storybook/**/*.ts', 'vite.config.ts'], project },
    'packages/*': { entry, project },
    'packages/**/packages/*': { entry, project },
    'packages/**/packages/**/packages/*': { entry, project },
  },
}

export default config
