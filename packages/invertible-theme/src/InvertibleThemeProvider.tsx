import { createTheme, responsiveFontSizes, ScopedCssBaseline, Theme, ThemeOptions, ThemeProvider } from '@mui/material'
import { cloneDeep, merge } from '@xylabs/lodash'
import React, { useMemo } from 'react'

import { InvertibleThemeContext } from './InvertibleThemeContext.tsx'
import { InvertibleThemeProviderProps } from './InvertibleThemeProviderProps.ts'
import { useInvertibleThemeProvider } from './use.ts'

export const resolveThemeColors = (options: ThemeOptions) => {
  const theme = createTheme(options)
  return merge({}, cloneDeep(options), {
    palette: {
      text: {
        primary: theme.palette?.getContrastText(theme.palette.primary.main),
        secondary: theme.palette?.getContrastText(theme.palette.secondary.main),
      },
    },
  })
}

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
  const parentContext = useInvertibleThemeProvider()
  const clonedOptions = cloneDeep(options ?? parentContext.options ?? {})
  const clonedDarkOptions = cloneDeep(darkOptions ?? darkTheme ?? parentContext.darkOptions)
  const clonedLightOptions = cloneDeep(lightOptions ?? parentContext.lightOptions)

  clonedOptions.palette = clonedOptions.palette ?? {}

  if (invert) {
    clonedOptions.palette.mode = clonedOptions.palette.mode === 'dark' ? 'light' : 'dark'
  }

  if (dark !== undefined) {
    clonedOptions.palette.mode = dark ? 'dark' : 'light'
  }

  const modeOptions = clonedOptions.palette.mode === 'dark' ? clonedDarkOptions : clonedLightOptions

  let themeOptions = merge({}, clonedOptions, modeOptions)

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
