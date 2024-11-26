import type { ColorSystemOptions } from '@mui/material'

import { personaColorsLightMode } from './customThemeColors.tsx'

export const lightThemePalette: ColorSystemOptions['palette'] = {
  background: {
    paper: '#FAFAFA',
    gradient: 'linear-gradient(45deg, #000, #fff)',
  },
  info: { main: '#72b4f4' },
  primary: { main: '#000' },
  secondary: { main: '#186ecc' },
  success: { main: '#48BA4B', contrastText: '#fff' },
  text: {
    disabled: '#D3D0CB',
    primary: '#1E2019',
    secondary: '#393E41',
  },
  personas: personaColorsLightMode,
}
