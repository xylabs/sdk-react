import {
  Box, CssBaseline, Typography, useTheme,
} from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { InvertibleThemeProvider } from './InvertibleThemeProvider.tsx'

const StorybookEntry = {
  argTypes: {},
  component: InvertibleThemeProvider,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'invertible-theme/InvertibleThemeProvider',
} as Meta<typeof InvertibleThemeProvider>

const Template: StoryFn<typeof InvertibleThemeProvider> = args => <InvertibleThemeProvider {...args}></InvertibleThemeProvider>

const ThemeEnabledComponent = () => {
  const theme = useTheme()
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Box padding={3} border={`1px dotted ${theme.palette.divider}`}>
          <Typography variant="h3">
            marginBottom of
            {theme.spacing(4)}
          </Typography>
          <Typography variant="h4" color={theme.palette.primary.main}>
            Color:
            {' '}
            {theme.palette.primary.main}
          </Typography>
          <Typography variant="h4" color={theme.palette.secondary.main}>
            Color:
            {' '}
            {theme.palette.secondary.main}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

const Default = Template.bind({})
Default.args = {
  children: <ThemeEnabledComponent />,
}

const DarkThemeEnabled = Template.bind({})
DarkThemeEnabled.args = {
  children: <ThemeEnabledComponent />,
  dark: true,
  darkTheme: {
    palette: {
      background: {
        default: '#303030',
        paper: '#424242',
      },
      mode: 'dark',
      primary: {
        main: '#ebebfb',
      },
      secondary: {
        main: '#ffb300',
      },
      text: {
        primary: '#ebebfb',
      },
    },
  },
}

export { DarkThemeEnabled, Default }

export default StorybookEntry
