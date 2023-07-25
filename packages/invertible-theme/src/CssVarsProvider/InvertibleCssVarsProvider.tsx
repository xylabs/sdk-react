import { Experimental_CssVarsProvider as CssVarsProvider, responsiveFontSizes } from '@mui/material'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { WithChildren } from '@xylabs/react-shared'

import { InvertibleCssVarsProvider } from './InvertibleCssVars'

export interface InvertibleCssVarsProviderProps extends InvertibleCssVarsProvider, WithChildren {}

export const InvertableCssVarsProvider: React.FC<InvertibleCssVarsProviderProps> = ({ children, defaultMode, noResponsiveFontSizes, theme }) => {
  const updatedTheme = theme ? (noResponsiveFontSizes ? theme : responsiveFontSizes(theme)) : theme
  return (
    <CssVarsProvider theme={updatedTheme} defaultMode={defaultMode}>
      {children}
    </CssVarsProvider>
  )
}
