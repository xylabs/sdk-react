import type { PaletteColorOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }
  interface TypeBackground {
    gradient: string
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
