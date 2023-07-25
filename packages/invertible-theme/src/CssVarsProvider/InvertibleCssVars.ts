import { CssVarsTheme, Theme } from '@mui/material'

// Hopefully MUI will export these types
export type CssVarsThemeObject = Omit<Theme, 'palette'> & CssVarsTheme
export type Mode = 'light' | 'dark' | 'system'

export interface InvertibleCssVarsProvider {
  defaultMode?: Mode
  noResponsiveFontSizes?: boolean
  syncAppSettings?: boolean
  theme?: CssVarsThemeObject
}
