import { Box, CssBaseline, Theme, useTheme } from '@mui/material'
import type { Decorator } from '@storybook/react'
import { InvertibleMuiThemeProvider } from '@xylabs/react-invertible-theme'
import React from 'react'
import { XyoTheme, DataismTheme, XyLabsTheme, XyosTheme } from '@xylabs/react-theme'

const themeNames = ['None', 'XYO', 'Dataism', 'XYLabs', 'xyOS'] as const
type ThemeName = typeof themeNames[number]

export const globalTypes = {
  theme: {
    name: 'ThemeOptions',
    description: 'Global theme for components',
    toolbar: {
      icon: 'eye',
      // Array of plain string values or MenuItem shape (see below)
      items: themeNames,
      // Property that specifies if the name of the item will be displayed
      title: 'None',
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
}

const getTheme = (themeName: ThemeName) => {
  const theme = useTheme()
  const themes: Record<ThemeName, Theme> = {
    'None': theme,
    'XYO': XyoTheme(theme, false),
    'xyOS': XyosTheme(theme),
    'Dataism': DataismTheme(theme),
    'XYLabs': XyLabsTheme(theme),
  }
  return themes[themeName] ?? {}
}


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: { storySort: { method: 'alphabetical' } },
}

const withThemeProvider: Decorator = (Story, context) => {

  if (typeof context.globals.theme !== 'string') {
    context.globals.theme = 'None'
  }

  const themeOptions = getTheme(context.globals.theme)
  const theme = themeOptions

  return (
    <InvertibleMuiThemeProvider theme={theme} defaultMode={'dark'}>
      <CssBaseline enableColorScheme />
        <Box>
          <Story {...context} />
        </Box>
    </InvertibleMuiThemeProvider>
  )
}

export const decorators = [withThemeProvider]