import type { Theme } from '@mui/material'
import { createTheme } from '@mui/material'

import type { CreateThemeOptions } from '../ThemeExtensions/index.ts'
import { XyoThemeBreakpoints } from './breakpoints.ts'
import { XyoThemeComponents } from './components.ts'
import { XyoThemeDarkThemeOptions } from './darkThemeOptions.ts'
import { XyoThemeLightThemeOptions } from './lightThemeOptions.ts'
import { XyoThemeTypography } from './typography.ts'

export const XyoThemeOptions: CreateThemeOptions = {
  colorSchemes: {
    dark: { ...XyoThemeDarkThemeOptions },
    light: { ...XyoThemeLightThemeOptions },
  },
  cssVariables: { colorSchemeSelector: 'class' },
  ...XyoThemeBreakpoints,
  ...XyoThemeComponents,
  shape: { borderRadius: 8 },
  spacing: 12,
  ...XyoThemeTypography,
}

export const XyoTheme = (_theme?: Theme): Theme => createTheme(XyoThemeOptions)
