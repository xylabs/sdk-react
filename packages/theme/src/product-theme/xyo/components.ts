import { alpha } from '@mui/material'

import { alphaCss } from '../../alphaCss.ts'
import { darkenCss } from '../../darkenCss.ts'
import type { CreateThemeOptions } from '../ThemeExtensions/index.ts'

export const XyoThemeComponents: CreateThemeOptions = {
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alphaCss(theme.vars.palette.background.paper, 0.3),
          color: 'inherit',
        }),
        standardError: ({ theme }) => ({ backgroundColor: alphaCss(theme.vars.palette.error.main, 0.3), color: theme.vars.palette.error.light }),
        standardInfo: ({ theme }) => ({ backgroundColor: alphaCss(theme.vars.palette.info.main, 0.3), color: theme.vars.palette.info.light }),
        standardSuccess: ({ theme }) => ({ backgroundColor: alphaCss(theme.vars.palette.success.main, 0.3), color: theme.vars.palette.success.light }),
        standardWarning: ({ theme }) => ({ backgroundColor: alphaCss(theme.vars.palette.warning.main, 0.3), color: theme.vars.palette.warning.light }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'none',
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          borderWidth: '2px',
          borderColor: 'inherit',
        }),
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: ({ theme }) => ({
            'WebkitBackdropFilter': 'blur(2px)',
            'backdropFilter': 'blur(2px)',
            'border': `2px solid ${alpha('#fff', 0.4)}`,
            'color': '#fff',
            '&:hover': {
              backgroundColor: '#ffffff',
              border: `2px solid ${alpha('#fff', 0)}`,
              color: darkenCss(theme.vars.palette.primary.dark, 0.7),
            },
          }),
        },
        {
          props: { size: 'small' },
          style: ({ theme }) => ({ padding: `${theme.spacing(0.5)} ${theme.spacing(1)}` }),
        },
      ],
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
    MuiLink: {
      // default color prop is required because Mui passes 'primary' as the default color prop and overrides
      // color: 'inherit' in their own css
      defaultProps: {
        color: 'inherit', underline: 'none', fontWeight: 600,
      },
    },
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
}
