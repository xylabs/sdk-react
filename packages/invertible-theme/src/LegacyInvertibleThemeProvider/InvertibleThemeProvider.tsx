/* eslint-disable complexity */
import type { Theme, ThemeOptions } from '@mui/material'
import {
  createTheme, responsiveFontSizes, ScopedCssBaseline, ThemeProvider,
} from '@mui/material'
import deepmerge from 'deepmerge'
import React, { useMemo } from 'react'
import rfdc from 'rfdc'

import { InvertibleThemeContext } from './InvertibleThemeContext.tsx'
import type { InvertibleThemeProviderProps } from './InvertibleThemeProviderProps.ts'
import { resolveThemeColors } from './resolveThemeColors.js'
import { useInvertibleThemeProvider } from './use.ts'

/** @deprecated use InvertibleMuiThemeProvider instead */
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

  const value = useMemo(() => ({
    darkOptions: clonedDarkOptions, lightOptions: clonedLightOptions, options: clonedOptions,
  }), [clonedDarkOptions, clonedLightOptions, clonedOptions])

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
