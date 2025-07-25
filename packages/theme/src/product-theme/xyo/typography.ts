import type { CreateThemeOptions } from '../ThemeExtensions/index.ts'

export const typography: CreateThemeOptions = {
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
    fontWeightRegular: 400,
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
      fontWeight: 400,
    },
    subtitle1: {
      opacity: '50%',
      textTransform: 'uppercase',
    },
    subtitle2: { opacity: '50%' },
  },
}
