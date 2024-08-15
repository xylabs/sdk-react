import { createTheme, responsiveFontSizes, ScopedCssBaseline, Theme, ThemeOptions, ThemeProvider } from '@mui/material'
import deepmerge from 'deepmerge'
import React, { useMemo } from 'react'
import rfdc from 'rfdc'

import { InvertibleThemeContext } from './InvertibleThemeContext.tsx'
import { InvertibleThemeProviderProps } from './InvertibleThemeProviderProps.ts'
import { useInvertibleThemeProvider } from './use.ts'

export const resolveThemeColors = (options: ThemeOptions) => {
  const theme = createTheme(options)
  const clone = rfdc()
  return { ...clone(options),
    palette: {
      text: {
        primary: theme.palette?.getContrastText(theme.palette.primary.main),
        secondary: theme.palette?.getContrastText(theme.palette.secondary.main),
      },
    },
  }
}

// eslint-disable-next-line complexity
export const InvertibleThemeProvider: React.FC<InvertibleThemeProviderProps> = ({
  options,
  children,
  dark,
  resolve = false,
  scoped = false,
  invert = false,
  noResponsiveFonts,
  darkTheme,
  darkOptions,
  lightOptions,
}) => {
  const clone = rfdc()
  const parentContext = useInvertibleThemeProvider()
  const clonedOptions = clone(options ?? parentContext.options ?? {})
  const clonedDarkOptions = clone(darkOptions ?? darkTheme ?? parentContext.darkOptions)
  const clonedLightOptions = clone(lightOptions ?? parentContext.lightOptions)

  clonedOptions.palette = clonedOptions.palette ?? {}

  if (invert) {
    clonedOptions.palette.mode = clonedOptions.palette.mode === 'dark' ? 'light' : 'dark'
  }

  if (dark !== undefined) {
    clonedOptions.palette.mode = dark ? 'dark' : 'light'
  }

  const modeOptions: ThemeOptions = ((clonedOptions.palette.mode === 'dark' ? clonedDarkOptions : clonedLightOptions)) ?? {}

  let themeOptions: ThemeOptions = deepmerge(clonedOptions, modeOptions)

  if (resolve) {
    themeOptions = resolveThemeColors(themeOptions)
  }

  const theme: Theme = noResponsiveFonts ? createTheme(themeOptions) : responsiveFontSizes(createTheme(themeOptions))

  const value = useMemo(() => ({ darkOptions: clonedDarkOptions, lightOptions: clonedLightOptions, options: clonedOptions }), [clonedDarkOptions, clonedLightOptions, clonedOptions])

  return scoped
    ? (
        <ScopedCssBaseline>
          <InvertibleThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </InvertibleThemeContext.Provider>
        </ScopedCssBaseline>
      )
    : (
        <InvertibleThemeContext.Provider value={value}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </InvertibleThemeContext.Provider>
      )
}
