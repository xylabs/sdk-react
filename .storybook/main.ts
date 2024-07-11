import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../**/src/**/*.mdx', '../**/src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      ],
    });
    
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: path.resolve(__dirname, '../tsconfig.json')
          }
        }
      ]
    });

    config.resolve = {
      ...config.resolve,
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json')
        })
      ],
      alias: {
        ...config.resolve?.alias,
        '.js': '.ts', // Redirect .js imports to .ts files if necessary
        '.jsx': '.tsx' // Redirect .jsx imports to .tsx files if necessary
      }
    };

    return config;
  }
};

export default config;
