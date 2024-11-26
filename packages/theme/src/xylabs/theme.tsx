import { createTheme, type Theme } from '@mui/material'

import { darkThemeOptions } from './darkThemeOptions.tsx'
import { lightThemeOptions } from './lightThemeOptions.tsx'

export const XyLabsTheme = (theme: Theme, rtl = false): Theme => createTheme({
  colorSchemes: {
    light: lightThemeOptions,
    dark: darkThemeOptions,
  },
  cssVariables: { colorSchemeSelector: 'class' },
  direction: rtl ? 'rtl' : 'ltr',
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          paddingBottom: 0.5,
          paddingTop: 0.5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: { backgroundColor: 'inherit' },
        root: { overflow: 'hidden' },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'none' },
      styleOverrides: { root: { '&:hover': { filter: 'brightness(75%)' } } },
    },
    MuiStepper: { styleOverrides: { root: { padding: '0px' } } },
  },
  shape: { borderRadius: 4 },
  spacing: 12,
  typography: {
    fontFamily: '"Outfit", sans-serif',
    body1: { fontSize: '1.1rem' },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightRegular: 400,
    h1: { fontSize: '4rem' },
    h2: { fontSize: '2.7rem' },
    h3: { fontSize: '2.24rem' },
    h4: { fontSize: '2rem' },
    h5: { fontSize: '1.5rem' },
    h6: { fontSize: '1.25rem' },
    subtitle1: {
      opacity: '50%',
      textTransform: 'uppercase',
    },
    subtitle2: { opacity: '50%' },
  },
})
