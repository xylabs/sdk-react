import type { ThemeOptions } from '@mui/material'

export const lightThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#fafafa',
      gradient: 'linear-gradient(45deg, #384AFD, #fafafa)',
    },
    primary: {
      dark: '#010965',
      light: '#EBECFF',
      main: '#384AFD',
    },
    secondary: {
      dark: '#AD8E13',
      light: '#F9D549',
      main: '#FFC91D',
    },
    error: { main: '#CC183C', contrastText: '#FDEDF0' },
    info: { main: '#186ecc', contrastText: '#DAEAFB' },
    success: { main: '#7efc81', contrastText: '#142B12' },
    warning: { main: '#F4813E', contrastText: '#271002' },
    text: { primary: '#1F2025' },
  },
}
