import { ThemeOptions } from '@mui/material'
import { ReactNode } from 'react'

interface InvertableThemeProviderProps {
  dark?: boolean
  scoped?: boolean
  invert?: boolean
  noResponsiveFonts?: boolean
  options?: ThemeOptions
  /**
   * @deprecated use darkOptions instead
   */
  darkTheme?: ThemeOptions
  darkOptions?: ThemeOptions
  lightOptions?: ThemeOptions
  resolve?: boolean
  children?: ReactNode
}

export type { InvertableThemeProviderProps }
