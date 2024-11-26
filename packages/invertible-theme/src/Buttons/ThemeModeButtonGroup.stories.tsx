import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import type { StoryFn } from '@storybook/react'
import React from 'react'

import { InvertibleMuiThemeProvider } from '../InvertibleMuiThemeProvider/index.ts'
import { ThemeModeButtonGroup } from './ThemeModeButtonGroup.tsx'

export default {
  title: 'Theme/ThemeModeButtonGroup',
  component: ThemeModeButtonGroup,
  parameters: { layout: 'fullscreen' },
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2c5ba8' },
    secondary: { main: '#ffb300' },
  },
})

const Template: StoryFn = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <InvertibleMuiThemeProvider>
      <ThemeModeButtonGroup sx={{ margin: 2 }} />
    </InvertibleMuiThemeProvider>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {}
