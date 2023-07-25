import { Experimental_CssVarsProvider as CssVarsProvider, responsiveFontSizes, useColorScheme } from '@mui/material'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { WithChildren } from '@xylabs/react-shared'
import { useEffect } from 'react'

import { InvertibleCssVarsProvider, Mode } from './InvertibleCssVars'

export const SyncMode: React.FC<{ defaultMode?: Mode }> = ({ defaultMode }) => {
  const { setMode } = useColorScheme()

  useEffect(() => {
    if (defaultMode) setMode(defaultMode)
  }, [defaultMode, setMode])

  return <></>
}

export interface InvertibleCssVarsProviderProps extends InvertibleCssVarsProvider, WithChildren {}

export const InvertableCssVarsProvider: React.FC<InvertibleCssVarsProviderProps> = ({
  children,
  defaultMode = 'system',
  noResponsiveFontSizes,
  theme,
}) => {
  const updatedTheme = theme ? (noResponsiveFontSizes ? theme : responsiveFontSizes(theme)) : theme

  return (
    <CssVarsProvider theme={updatedTheme} defaultMode={defaultMode}>
      <SyncMode {...(defaultMode ? { defaultMode } : {})} />
      {children}
    </CssVarsProvider>
  )
}
