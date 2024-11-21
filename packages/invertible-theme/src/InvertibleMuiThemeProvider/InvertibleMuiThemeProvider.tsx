import type { Theme } from '@mui/material'
import {
  createTheme,
  responsiveFontSizes, ThemeProvider, useColorScheme,
} from '@mui/material'
import React, { useEffect, useMemo } from 'react'

import type { InvertibleMuiThemeProviderProps, Mode } from './InvertibleMuiThemeProviderProps.ts'

export const SyncMode: React.FC<{ defaultMode?: Mode }> = ({ defaultMode }) => {
  const { setMode } = useColorScheme()

  useEffect(() => {
    if (defaultMode) setMode(defaultMode)
  }, [defaultMode])

  return <></>
}

/**
 * @deprecated - use InvertibleMuiThemeProvider
 */
export const InvertibleCssVarsProvider: React.FC<InvertibleMuiThemeProviderProps> = ({
  children,
  defaultMode,
  noResponsiveFontSizes,
  theme,
}) => {
  const updatedTheme: Theme = useMemo(() => theme
    ? noResponsiveFontSizes
      ? theme
      : responsiveFontSizes(theme)
    : createTheme(), [noResponsiveFontSizes, theme])

  return (
    <ThemeProvider theme={updatedTheme}>
      <SyncMode {...(defaultMode ? { defaultMode } : {})} />
      {children}
    </ThemeProvider>
  )
}

export const InvertibleMuiThemeProvider = InvertibleCssVarsProvider
