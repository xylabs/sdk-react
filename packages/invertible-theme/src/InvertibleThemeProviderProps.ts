import { ThemeOptions } from '@mui/material'
import { ReactNode } from 'react'

interface InvertibleThemeProviderProps {
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

export type { InvertibleThemeProviderProps }
