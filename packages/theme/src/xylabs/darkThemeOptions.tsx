import { type ThemeOptions } from '@mui/material'

export const darkThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#0b0f30',
      paper: '#101742',
      gradient: 'linear-gradient(to right, #384AFD, #FFC91D)',
    },
    mode: 'dark',
    text: {
      disabled: '#a5acdb',
      primary: '#f7f8fc',
      secondary: '#daddf2',
    },
  },
}
