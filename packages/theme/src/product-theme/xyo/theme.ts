import type { Theme } from '@mui/material'
import { alpha, createTheme } from '@mui/material'

import {
  MuiLinkFragment, shapeFragment, spacingFragment,
} from '../../theme-fragments/index.ts'
import { darkThemeOptions } from './darkThemeOptions.tsx'
import { lightThemeOptions } from './lightThemeOptions.tsx'

export const XyoTheme = (_theme?: Theme, rtl = false): Theme => createTheme({
  colorSchemes: {
    dark: darkThemeOptions,
    light: lightThemeOptions,
  },
  cssVariables: { colorSchemeSelector: 'class' },
  direction: rtl ? 'rtl' : 'ltr',
  breakpoints: {
    values: {
      lg: 1350,
      md: 900,
      sm: 600,
      xl: 1536,
      xs: 0,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.paper, 0.3),
          color: 'inherit',
        }),
        standardError: ({ theme }) => ({
          backgroundColor: 'color-mix(in srgb, var(--mui-palette-error-main), transparent 30%)',
          color: theme.palette.error.light,
        }),
        standardInfo: ({ theme }) => ({
          backgroundColor: 'color-mix(in srgb, var(--mui-palette-info-main), transparent 30%)',
          color: theme.palette.info.light,
        }),
        standardSuccess: ({ theme }) => ({
          backgroundColor: 'color-mix(in srgb, var(--mui-palette-success-main), transparent 30%)',
          color: theme.palette.success.light,
        }),
        standardWarning: ({ theme }) => ({
          backgroundColor: 'color-mix(in srgb, var(--mui-palette-warning-main), transparent 30%)',
          color: theme.palette.warning.light,
        }),
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      },
    },
    MuiContainer: { styleOverrides: { root: { maxWidth: 'xl' } } },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color, color',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: 'inherit',
            WebkitTextFillColor: 'inherit',
            caretColor: 'inherit',
          },
        },
      },
    },
    ...MuiLinkFragment,
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: 'inherit',
            WebkitTextFillColor: 'inherit',
            caretColor: 'inherit',
          },
        },
      },
    },
  },
  ...spacingFragment,
  ...shapeFragment,
  typography: {
    fontFamily: '"Lexend Deca", sans-serif',
    body1: { fontSize: '1.1rem' },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    fontWeightBold: 600,
    fontWeightLight: 200,
    fontWeightMedium: 500,
    fontWeightRegular: 300,
    h1: {
      fontSize: '3.2rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '2.7rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '2.24rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    subtitle1: {
      opacity: '50%',
      textTransform: 'uppercase',
    },
    subtitle2: { opacity: '50%' },
  },
})
