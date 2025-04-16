import {
  Box,
  useTheme,
} from '@mui/material'
import React from 'react'

import { ColorSchemeButton } from '../../components/index.ts'
import { ColorCard } from './ColorCard.tsx'

export const ColorShowcase: React.FC = () => {
  const theme = useTheme()

  return (
    <Box display="flex" flexDirection="column" flex="1 1 0px">
      <ColorSchemeButton />
      <Box display="flex" flex="1 1 0px" flexDirection="row" justifyContent="stretch">
        <ColorCard
          style={{ background: theme.palette.background.gradient }}
          color={theme.palette.background.gradient}
          colorName="Background"
          subtype="Gradient"
        />
        <ColorCard
          color={theme.palette.text.primary}
          bgcolor={theme.palette.background.default}
          colorName="Background"
          subtype="Default"
        />
        <ColorCard
          color={theme.palette.text.primary}
          bgcolor={theme.palette.background.paper}
          colorName="Background"
          subtype="Paper"
        />
      </Box>
      <Box display="flex" flex="1 1 0px" flexDirection="row" justifyContent="stretch">
        <ColorCard
          color={theme.palette.primary.contrastText}
          bgcolor={theme.palette.primary.main}
          colorName="Primary"
        />
        <ColorCard
          color={theme.palette.secondary.contrastText}
          bgcolor={theme.palette.secondary.main}
          colorName="Secondary"
        />
        <Box display="flex" flex="1 1 0px" flexDirection="column">
          <Box display="flex" flex="1 1 0px" flexDirection="row">
            <ColorCard
              color={theme.palette.info.contrastText}
              bgcolor={theme.palette.info.main}
              colorName="Info"
            />
            <ColorCard
              color={theme.palette.success.contrastText}
              bgcolor={theme.palette.success.main}
              colorName="Success"
            />
          </Box>
          <Box display="flex" flex="1 1 0px" flexDirection="row">
            <ColorCard
              color={theme.palette.warning.contrastText}
              bgcolor={theme.palette.warning.main}
              colorName="Warning"
            />
            <ColorCard
              color={theme.palette.error.contrastText}
              bgcolor={theme.palette.error.main}
              colorName="Error"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
