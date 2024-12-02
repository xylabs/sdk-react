import type { Theme } from '@mui/material'
import { createTheme } from '@mui/material'

export const shapeFragment = (theme: Theme): Theme => createTheme({ shape: { borderRadius: 4 } })
