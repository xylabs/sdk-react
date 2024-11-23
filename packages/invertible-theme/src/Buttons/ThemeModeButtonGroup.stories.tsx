import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
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

const Template = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <InvertibleMuiThemeProvider>
      <ThemeModeButtonGroup />
    </InvertibleMuiThemeProvider>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {}
