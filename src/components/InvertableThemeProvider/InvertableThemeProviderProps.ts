import { ThemeOptions } from '@mui/material'

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
}

export type { InvertableThemeProviderProps }
