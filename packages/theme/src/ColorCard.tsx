import type { BoxProps } from '@mui/material'
import {
  Box,
  Typography,
} from '@mui/material'
import React from 'react'

export interface ColorCardProps extends BoxProps {
  colorName: string
  subtype?: string
}

export const ColorCard: React.FC<ColorCardProps> = ({
  colorName, subtype, ...props
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      flex="1 1 0px"
      padding={2}
      {...props}
    >
      <Box flexDirection="column">
        <Typography variant="caption">{subtype}</Typography>
        <Typography variant="h6">
          {colorName}
        </Typography>
      </Box>
      <Typography alignSelf="flex-end" variant="caption">
        {colorName}
      </Typography>
    </Box>
  )
}
