import {
  Box,
  useTheme,
} from '@mui/material'
import React from 'react'

import { ColorCard } from './ColorCard.tsx'
import { PaletteColorCard } from './PaletteColorCard.tsx'

export const ColorShowcase: React.FC = () => {
  const theme = useTheme()

  return (
    <Box display="flex" flexDirection="column" flex="1 1 0px">
      <Box display="flex" flex="1 1 0px" flexDirection="row" justifyContent="stretch">
        <ColorCard
          bgcolor={theme.palette.background.default}
          color={theme.palette.background.default as string}
          colorName="Background"
          subtype="default"
        />
        <ColorCard
          bgcolor={theme.palette.background.paper}
          color={theme.palette.background.paper as string}
          colorName="Background"
          subtype="paper"
        />
        <ColorCard
          bgcolor={theme.palette.background.gradient}
          color={theme.palette.background.gradient as string}
          colorName="Gradient"
        />
      </Box>
      <Box display="flex" flex="1 1 0px" flexDirection="row" justifyContent="stretch">
        <PaletteColorCard color={theme.palette.primary} colorName="Primary" subtype="main" />
        <PaletteColorCard color={theme.palette.secondary} colorName="Secondary" subtype="main" />
        <Box display="flex" flex="1 1 0px" flexDirection="column">
          <Box display="flex" flex="1 1 0px" flexDirection="row">
            <PaletteColorCard color={theme.palette.info} colorName="Info" subtype="main" />
            <PaletteColorCard color={theme.palette.success} colorName="Success" subtype="main" />
          </Box>
          <Box display="flex" flex="1 1 0px" flexDirection="row">
            <PaletteColorCard color={theme.palette.warning} colorName="Warning" subtype="main" />
            <PaletteColorCard color={theme.palette.error} colorName="Error" subtype="main" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
