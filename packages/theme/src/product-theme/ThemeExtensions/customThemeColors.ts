import { alpha } from '@mui/material/styles'

export const neutralButtonStylesContained = {
  'color': '#000',
  'backgroundColor': '#fff',
  '&:hover': { backgroundColor: alpha('#fff', 0.8) },
}

export const neutralButtonStylesOutlined = {
  'color': '#fff',
  '&:hover': { backgroundColor: alpha('#fff', 0.9) },
}

export const neutralAlertStyles = {
  'color': '#fff',
  'backgroundColor': alpha('#000', 0.02),
  'WebkitBackdropFilter': 'blur(20px)',
  'backdropFilter': 'saturate(180%) blur(20px)',
  '&:hover': { backgroundColor: alpha('#fff', 0.05) },
}
