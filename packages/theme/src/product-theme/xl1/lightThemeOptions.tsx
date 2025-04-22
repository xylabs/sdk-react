import type { ThemeOptions } from '@mui/material'

export const lightThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#F4F4F4',
      paper: '#FFFFFF',
    },
    error: {
      dark: '#AA0E0E',
      light: '#F15555',
      main: '#D81111',
    },
    neutral: {
      main: '#000', contrastText: '#fff', dark: '#333',
    },
    primary: { main: '#463dc6', light: '#b2adfb' },
    secondary: { main: '#186ecc' },
    success: {
      dark: '#347f21',
      light: '#94dd80',
      main: '#62bc50',
    },
    text: {
      disabled: '#49454D',
      primary: '#0d0d47',
      secondary: '#49454D',
    },
    warning: { main: '#ffc805' },
  },
}
