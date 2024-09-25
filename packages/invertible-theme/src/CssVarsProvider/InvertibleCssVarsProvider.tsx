import type { Theme } from '@mui/material'
import {
  createTheme,
  responsiveFontSizes, ThemeProvider, useColorScheme,
} from '@mui/material'
import React, { useEffect, useMemo } from 'react'

import type { InvertibleCssVarsProviderProps, Mode } from './InvertibleCssVarsProviderProps.ts'

export const SyncMode: React.FC<{ defaultMode?: Mode }> = ({ defaultMode }) => {
  const { setMode } = useColorScheme()

  useEffect(() => {
    if (defaultMode) setMode(defaultMode)
  }, [defaultMode, setMode])

  return <></>
}

export const InvertibleCssVarsProvider: React.FC<InvertibleCssVarsProviderProps> = ({
  children,
  defaultMode = 'system',
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
