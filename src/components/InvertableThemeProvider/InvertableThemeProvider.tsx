import { responsiveFontSizes, ScopedCssBaseline, Theme, ThemeProvider } from '@mui/material'
import { createTheme, ThemeOptions } from '@mui/material/styles'
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'
import React, { useContext } from 'react'

import { InvertableThemeContext } from './InvertableThemeContext'
import { InvertableThemeProviderProps } from './InvertableThemeProviderProps'

export const resolveThemeColors = (options: ThemeOptions) => {
  const theme = createTheme(options)
  return merge({}, options, {
    palette: {
      text: {
        primary: theme.palette?.getContrastText(theme.palette.primary.main),
        secondary: theme.palette?.getContrastText(theme.palette.secondary.main),
      },
    },
  })
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
  const clonedOptions = cloneDeep(options ?? contextInvertableTheme.options ?? {})

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

  let themeOptions = merge(clonedOptions, internalDarkTheme)

  if (resolve) {
    themeOptions = resolveThemeColors(themeOptions)
  }

  const theme: Theme = noResponsiveFonts ? createTheme(themeOptions) : responsiveFontSizes(createTheme(themeOptions))

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
