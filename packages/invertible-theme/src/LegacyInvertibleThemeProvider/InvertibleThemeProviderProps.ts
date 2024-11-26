import type { ThemeOptions } from '@mui/material'
import type { ReactNode } from 'react'

/** @deprecated use InvertibleMuiThemeProviderProps instead */
export interface InvertibleThemeProviderProps {
  children?: ReactNode
  dark?: boolean

  darkOptions?: ThemeOptions
  /**
   * @deprecated use darkOptions instead
   */
  darkTheme?: ThemeOptions

  invert?: boolean
  lightOptions?: ThemeOptions
  noResponsiveFonts?: boolean
  options?: ThemeOptions
  resolve?: boolean
  scoped?: boolean
}
