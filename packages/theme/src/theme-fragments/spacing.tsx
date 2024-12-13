import type { Theme } from '@mui/material'
import { createTheme } from '@mui/material'

export const spacingFragment = (_theme?: Theme): Theme => createTheme({ spacing: 8 })
