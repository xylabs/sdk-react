import { responsiveFontSizes, ScopedCssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import clone from 'lodash/clone'
import React, { useContext } from 'react'

import { InvertableThemeContext } from './InvertableThemeContext'
import { InvertableThemeProviderProps } from './InvertableThemeProviderProps'

const InvertableThemeProvider: React.FC<InvertableThemeProviderProps> = ({
  options,
  children,
  dark,
  scoped = false,
  invert = false,
  noResponsiveFonts,
  darkTheme,
}) => {
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
    clonedOptions.palette = darkTheme.palette
  }

  let theme = createTheme(clonedOptions)

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

export { InvertableThemeProvider }
