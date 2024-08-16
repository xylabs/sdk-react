import type { ThemeOptions } from '@mui/material'

interface InvertibleTheme {
  darkOptions?: ThemeOptions
  lightOptions?: ThemeOptions
  options: ThemeOptions
}

export type { InvertibleTheme }
