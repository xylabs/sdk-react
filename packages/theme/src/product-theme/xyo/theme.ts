import type { Theme } from '@mui/material'
import { createTheme } from '@mui/material'

import type { CreateThemeOptions } from '../ThemeExtensions/index.ts'
import { breakpoints } from './breakpoints.ts'
import { components } from './components.ts'
import { darkThemeOptions } from './darkThemeOptions.ts'
import { lightThemeOptions } from './lightThemeOptions.ts'
import { typography } from './typography.ts'

export const XyoThemeOptions: CreateThemeOptions = {
  colorSchemes: {
    dark: { ...darkThemeOptions },
    light: { ...lightThemeOptions },
  },
  cssVariables: { colorSchemeSelector: 'class' },
  ...breakpoints,
  ...components,
  shape: { borderRadius: 8 },
  spacing: 12,
  ...typography,
}

export const XyoTheme = (_theme?: Theme): Theme => createTheme(XyoThemeOptions)
