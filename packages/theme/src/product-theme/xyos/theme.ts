import type { Theme } from '@mui/material'
import { alpha, createTheme } from '@mui/material'

import {
  MuiLinkFragment, shapeFragment, spacingFragment,
} from '../../theme-fragments/index.ts'
import { darkThemeOptions } from './darkThemeOptions.tsx'
import { lightThemeOptions } from './lightThemeOptions.tsx'

export const XyosTheme = (): Theme => createTheme({
  colorSchemes: {
    dark: darkThemeOptions,
    light: lightThemeOptions,
  },
  cssVariables: { colorSchemeSelector: 'class' },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': { '&$expanded': { margin: '4px 0' } },
          'boxShadow': 'none',
        },
      },
    },
    MuiAccordionSummary: { styleOverrides: { root: { boxShadow: 'none' } } },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
          backgroundColor: alpha(theme.palette.background.paper, 0.2),
          boxShadow: 'none',
          color: '#16163D',
          ...theme.applyStyles('dark', { color: '#CBC4CE' }),
        }),
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme }) => ({
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
          backgroundColor: alpha(theme.palette.background.paper, 0.7),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          // This is to get rid of the extra padding at the end of Card Content that misaligns padding when there's only 1 item
          '&:last-child': { paddingBottom: '16px' },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        content: {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
      },
    },
    MuiContainer: { styleOverrides: { root: { maxWidth: 'xl' } } },
    MuiDrawer: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiTypography-root, & .MuiButton-root': { color: '#FFFFFF' },
          'paperProps': { backgroundColor: '#19193F' },
          ...theme.applyStyles('dark', { color: theme.palette.secondary.main }),
        }),
      },
    },
    MuiFilledInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-error': { border: `${theme.palette.error.main} 1px solid` },
          'border': 'transparent 1px solid',
          'borderRadius': theme.shape.borderRadius,
        }),
      },
    },
    ...MuiLinkFragment,
    MuiPaper: { defaultProps: { elevation: 0 } },
    MuiTableCell: {
      styleOverrides: {
        body: {
          fontFamily: 'monospace',
          whiteSpace: 'nowrap',
        },
        head: {
          fontWeight: 700,
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          color: 'inherit',
          fontSize: '0.75rem',
          maxWidth: 250,
          border: `1px solid ${theme.palette.background.default}`,
          padding: theme.spacing(1),
          boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
        }),
      },
    },
  },
  ...spacingFragment,
  ...shapeFragment,
  typography: {
    allVariants: { fontFamily: ['Manrope', 'san-serif'].join(',') },
    body1: { fontSize: '16px' },
    button: {
      fontSize: '1rem',
      textTransform: 'capitalize',
    },
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    h1: { fontSize: '3.2rem' },
    h2: { fontSize: '2.7rem' },
    h3: { fontSize: '2.24rem' },
    h4: { fontSize: '2rem' },
    h5: { fontSize: '1.5rem' },
    h6: { fontSize: '1.2rem' },
    subtitle1: {
      fontWeight: 300,
      opacity: '50%',
      textTransform: 'uppercase',
    },
    subtitle2: { opacity: '50%' },
  },
})
