import {
  alpha, ListItemButton, styled,
} from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'

// Styled span for wrapping menu icons
export const StyledMenuIconWrapSpan = styled('span', { name: 'StyledMenuIconWrapSpan' })(() => ({
  alignItems: 'center',
  display: 'inline-flex',
  flexDirection: 'column',
}))

export const StyledFlexRow = styled(FlexRow, { name: 'StyledFlexRow' })(({ theme }) => ({
  '&:hover': { backgroundColor: alpha(theme.palette.text.primary, 0.05) },
  'borderRadius': '10px',
  'paddingLeft': theme.spacing(0.5),
  'padding': theme.spacing(0.5),
  'flexGrow': 1,
}))

export const StyledListItemButton = styled(ListItemButton, { name: 'StyledListItemButton', shouldForwardProp: prop => prop !== 'active' })<{
  active?: boolean
}>(({ theme, active }) => {
  const activeOrHoverColor = theme.palette.primary.main

  return {
    'position': 'relative',
    'padding': '8px 16px',
    'borderRadius': '12px',
    'transition': 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'transparent',
      borderRadius: '12px',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '6px',
      backgroundColor: active ? activeOrHoverColor : 'transparent',
      borderRadius: '0 4px 4px 0',
      transition: 'background-color 0.3s ease',
    },
  }
})
