import type { ColorSystemOptions } from '@mui/material/styles'

export const darkThemeOptions: ColorSystemOptions = {
  palette: {
    background: {
      default: '#020223',
      paper: '#16163D',
      gradient: 'linear-gradient(45deg, #66CAF7, #020223)',
    },
    neutral: {
      main: '#fff', contrastText: '#111', dark: '#ccc',
    },
    info: { main: '#72b4f4' },
    primary: { main: '#5658F3', light: '#7c72ff' },
    secondary: {
      main: '#66caf7',
      contrastText: '#020223',
    },
    success: {
      main: '#7efc81',
      contrastText: '#011e01',
    },
    warning: { main: '#f7d866' },
    error: { main: '#f6594e' },
    text: {
      disabled: '#a5acdb',
      primary: '#E3E4EB',
      secondary: '#e3e4eba3',
    },
  },
}
