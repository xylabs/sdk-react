import { createTheme, type Theme } from '@mui/material'

import {
  componentFragment, shapeFragment, spacingFragment,
} from '../../theme-fragments/index.ts'
import { darkThemeOptions } from './darkThemeOptions.tsx'
import { lightThemeOptions } from './lightThemeOptions.tsx'

export const XyLabsTheme = (_theme?: Theme): Theme => createTheme({
  colorSchemes: {
    light: lightThemeOptions,
    dark: darkThemeOptions,
  },
  cssVariables: { colorSchemeSelector: 'class' },
  ...componentFragment,
  ...spacingFragment,
  ...shapeFragment,
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
