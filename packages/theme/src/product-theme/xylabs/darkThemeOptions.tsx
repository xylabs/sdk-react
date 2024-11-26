import { type ThemeOptions } from '@mui/material'

export const darkThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#0b0f30',
      paper: '#101742',
      gradient: 'linear-gradient(45deg, #384AFD, #0b0f30)',
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
    text: {
      disabled: '#a5acdb',
      primary: '#f7f8fc',
      secondary: '#daddf2',
    },
  },
}
