import type { ColorSystemOptions } from '@mui/material'

export const darkThemeOptions: ColorSystemOptions = {
  palette: {
    background: {
      default: '#020223',
      paper: '#19193F',
    },
    error: { main: '#f6594e' },
    neutral: {
      main: '#fff', contrastText: '#111', dark: '#ccc',
    },
    primary: { main: '#5658F3', light: '#7c72ff' },
    secondary: {
      main: '#66caf7',
      contrastText: '#020223',
    },
    success: {
      main: '#7efc81',
      contrastText: '#011e01',
    },
    text: {
      disabled: '#a5acdb',
      primary: '#E3E4EB',
      secondary: '#e3e4eba3',
    },
    warning: { main: '#f7d866' },
  },
}
