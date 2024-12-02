import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Typography {
    display1: React.CSSProperties
    display2: React.CSSProperties
    stylize1: React.CSSProperties
    stylize2: React.CSSProperties
  }

  interface TypographyOptions {
    display1?: React.CSSProperties
    display2?: React.CSSProperties
    stylize1?: React.CSSProperties
    stylize2?: React.CSSProperties
  }
}

export const display1 = { fontSize: '4rem' }

export const display2 = {
  fontSize: '3.5rem',
  fontWeight: 400,
}

export const stylize1 = {
  fontSize: '1.25rem',
  fontWeight: 300,
  letterSpacing: '0.15em',
}

export const stylize2 = {
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
}

export const typographyFragmentDisplay1 = {
  fontSize: '4rem',
  fontWeight: 400,
}

export const typographyFragmentDisplay2 = {
  fontSize: '4rem',
  fontWeight: 400,
}

export const typographyFragmentStylize1 = {
  fontSize: '4rem',
  fontWeight: 400,
}

export const typographyFragmentStylize2 = {
  fontSize: '4rem',
  fontWeight: 400,
}
