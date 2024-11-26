import type { ThemeOptions } from '@mui/material'

/** @deprecated switch to InvertibleMuiThemeProvider which does not require this */
export interface InvertibleTheme {
  darkOptions?: ThemeOptions
  lightOptions?: ThemeOptions
  options: ThemeOptions
}
