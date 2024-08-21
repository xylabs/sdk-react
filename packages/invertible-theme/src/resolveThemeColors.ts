import type { ThemeOptions } from '@mui/material'
import {
  createTheme,
} from '@mui/material'
import rfdc from 'rfdc'

export const resolveThemeColors = (options: ThemeOptions) => {
  const theme = createTheme(options)
  const clone = rfdc()
  return {
    ...clone(options),
    palette: {
      text: {
        primary: theme.palette?.getContrastText(theme.palette.primary.main),
        secondary: theme.palette?.getContrastText(theme.palette.secondary.main),
      },
    },
  }
}
