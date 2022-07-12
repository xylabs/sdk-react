import { alpha, Box, LinearProgress, LinearProgressProps, useTheme } from '@mui/material'
import React from 'react'

export interface BusyLinearProgressProps extends LinearProgressProps {
  opacity?: string | number
  rounded?: boolean
  bgcolor?: string
}

const BusyLinearProgress: React.FC<BusyLinearProgressProps> = ({ bgcolor, style, rounded, opacity = 0.85, ...props }) => {
  const theme = useTheme()
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor={alpha(bgcolor ?? theme.palette.background.default, parseFloat(`${opacity}`))}
      position="absolute"
      left={0}
      right={0}
      top={0}
      bottom={0}
      justifyContent="flex-start"
      alignItems="stretch"
      overflow="hidden"
      style={{ borderRadius: rounded ? theme.shape.borderRadius : 0, ...style }}
    >
      <LinearProgress {...props} />
    </Box>
  )
}

export { BusyLinearProgress }
