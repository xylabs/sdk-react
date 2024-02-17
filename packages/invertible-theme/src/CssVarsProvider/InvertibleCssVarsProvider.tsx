import { Experimental_CssVarsProvider as CssVarsProvider, responsiveFontSizes, useColorScheme } from '@mui/material'
// eslint-disable-next-line import/no-internal-modules
import type {} from '@mui/material/themeCssVarsAugmentation'
import { ReactNode, useEffect } from 'react'

import { InvertibleCssVarsProviderInterface, Mode } from './InvertibleCssVars'

export const SyncMode: React.FC<{ defaultMode?: Mode }> = ({ defaultMode }) => {
  const { setMode } = useColorScheme()

  useEffect(() => {
    if (defaultMode) setMode(defaultMode)
  }, [defaultMode, setMode])

  return <></>
}

export interface InvertibleCssVarsProviderProps extends InvertibleCssVarsProviderInterface {
  children?: ReactNode | undefined
}

export const InvertibleCssVarsProvider: React.FC<InvertibleCssVarsProviderProps> = ({
  children,
  defaultMode = 'system',
  noResponsiveFontSizes,
  theme,
}) => {
  const updatedTheme =
    theme ?
      noResponsiveFontSizes ? theme
      : responsiveFontSizes(theme)
    : theme

  return (
    <CssVarsProvider theme={updatedTheme} defaultMode={defaultMode}>
      <SyncMode {...(defaultMode ? { defaultMode } : {})} />
      {children}
    </CssVarsProvider>
  )
}
