import type {
  Palette, PaletteColorOptions, PaletteOptions, SimplePaletteColorOptions,
  TypeBackground,
} from '@mui/material'
import {
  Box,
  Typography, useTheme,
} from '@mui/material'
import React from 'react'

export interface PaletteColorCardProps {
  color: SimplePaletteColorOptions
  colorName: string
  subtype: keyof SimplePaletteColorOptions
}

export const PaletteColorCard: React.FC<PaletteColorCardProps> = ({
  color, colorName, subtype,
}) => {
  const theme = useTheme()
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      flex="1 1 0px"
      bgcolor={color[subtype]}
      padding={2}
    >
      <Box flexDirection="column">
        <Typography variant="caption" color={color.contrastText}>{subtype}</Typography>
        <Typography variant="h6" color={color.contrastText}>{colorName}</Typography>
      </Box>
      <Typography alignSelf="flex-end" variant="caption" color={color.contrastText}>{color[subtype]?.toString()}</Typography>
    </Box>
  )
}
