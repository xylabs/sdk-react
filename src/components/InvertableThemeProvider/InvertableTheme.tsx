import { ThemeOptions } from '@mui/material'

interface InvertableTheme {
  options: ThemeOptions
  lightOptions?: ThemeOptions
  darkOptions?: ThemeOptions
}

export type { InvertableTheme }
