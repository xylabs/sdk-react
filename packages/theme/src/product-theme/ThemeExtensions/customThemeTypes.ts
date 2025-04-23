import type {
  CssVarsPalette, Palette as MuiPalette, PaletteColorOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }
  interface TypeBackground {
    gradient: string
  }
  interface Theme {
    palette: MuiPalette & CssVarsPalette & {
      neutral: PaletteColorOptions
    }
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
  }
}

declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides {
    neutral: true
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    neutral: true
  }
}
