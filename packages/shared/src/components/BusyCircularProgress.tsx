import type { CircularProgressProps } from '@mui/material'
import { alpha, Box, CircularProgress, useTheme } from '@mui/material'
import React from 'react'

export interface BusyCircularProgressProps extends CircularProgressProps {
  bgcolor?: string
  opacity?: number | string
  rounded?: boolean
  size?: string | number
}

const BusyCircularProgress: React.FC<BusyCircularProgressProps> = ({ bgcolor, style, rounded, size, opacity = 0.85, ...props }) => {
  const theme = useTheme()
  return (
    <Box
      display="flex"
      bgcolor={alpha(bgcolor ?? theme.palette.background.default, Number.parseFloat(`${opacity}`))}
      flexGrow={1}
      position="absolute"
      left={0}
      right={0}
      top={0}
      bottom={0}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      style={{ borderRadius: rounded ? theme.shape.borderRadius : 0, ...style }}
    >
      <CircularProgress size={size} {...props} />
    </Box>
  )
}

export { BusyCircularProgress }
