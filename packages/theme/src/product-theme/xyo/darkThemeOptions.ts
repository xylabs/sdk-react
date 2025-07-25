import type { ColorSystemOptions } from '@mui/material/styles'

export const XyoThemeDarkThemeOptions: ColorSystemOptions = {
  palette: {
    background: {
      default: '#000',
      paper: '#111111',
    },
    neutral: {
      main: '#fff',
      contrastText: '#000',
    },
    info: { main: '#72b4f4' },
    primary: { main: '#5658F3' },
    secondary: {
      main: '#37CEFF',
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
