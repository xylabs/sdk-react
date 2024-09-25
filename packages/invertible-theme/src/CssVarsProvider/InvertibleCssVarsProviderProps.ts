import type { Theme } from '@mui/material'
import type { ReactNode } from 'react'

// Hopefully MUI will export these types
export type Mode = 'light' | 'dark' | 'system'

export interface InvertibleCssVarsProviderProps {
  children?: ReactNode
  defaultMode?: Mode
  noResponsiveFontSizes?: boolean
  syncAppSettings?: boolean
  theme?: Theme
}
