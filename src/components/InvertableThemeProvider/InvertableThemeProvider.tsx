import { responsiveFontSizes, ScopedCssBaseline, ThemeProvider } from '@mui/material'
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'
import clone from 'lodash/clone'
import merge from 'lodash/merge'
import React, { useContext } from 'react'

import { InvertableThemeContext } from './InvertableThemeContext'
import { InvertableThemeProviderProps } from './InvertableThemeProviderProps'

export const resolveThemeColors = (theme: Theme, options: ThemeOptions) => {
  const newTheme = createTheme(options, {
    palette: {
      text: {
        primary: theme.palette?.getContrastText(theme.palette.primary.main),
        secondary: theme.palette?.getContrastText(theme.palette.secondary.main),
      },
    },
  })
  return newTheme
}

export const InvertableThemeProvider: React.FC<InvertableThemeProviderProps> = ({
  options,
  children,
  dark,
  resolve = false,
  scoped = false,
  invert = false,
  noResponsiveFonts,
  darkTheme,
}) => {
  let internalDarkTheme = {}
  const contextInvertableTheme = useContext(InvertableThemeContext)
  const clonedOptions = clone(options ?? contextInvertableTheme.options ?? {})

  clonedOptions.palette = clonedOptions.palette ?? {}

  if (invert) {
    clonedOptions.palette.mode = clonedOptions.palette.mode === 'dark' ? 'light' : 'dark'
  }

  if (dark !== undefined) {
    clonedOptions.palette.mode = dark ? 'dark' : 'light'
  }

  if (clonedOptions.palette.mode === 'dark' && darkTheme?.palette) {
    internalDarkTheme = darkTheme
  }

  let theme = createTheme(clonedOptions, internalDarkTheme)

  if (resolve) {
    theme = resolveThemeColors(theme, merge({}, clonedOptions, internalDarkTheme))
  }

  if (!noResponsiveFonts) {
    theme = responsiveFontSizes(theme)
  }

  return scoped ? (
    <ScopedCssBaseline>
      <InvertableThemeContext.Provider value={{ options: clonedOptions }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </InvertableThemeContext.Provider>
    </ScopedCssBaseline>
  ) : (
    <InvertableThemeContext.Provider value={{ options: clonedOptions }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </InvertableThemeContext.Provider>
  )
}
