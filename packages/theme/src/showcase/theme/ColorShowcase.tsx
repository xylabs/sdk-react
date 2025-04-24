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
          style={{ background: theme.vars.palette.background.gradient }}
          color={theme.vars.palette.background.gradient}
          colorName="Background"
          subtype="Gradient"
        />
        <ColorCard
          color={theme.vars.palette.text.primary}
          bgcolor={theme.vars.palette.background.default}
          colorName="Background"
          subtype="Default"
        />
        <ColorCard
          color={theme.vars.palette.text.primary}
          bgcolor={theme.vars.palette.background.paper}
          colorName="Background"
          subtype="Paper"
        />
      </Box>
      <Box display="flex" flex="1 1 0px" flexDirection="row" justifyContent="stretch">
        <ColorCard
          color={theme.vars.palette.primary.contrastText}
          bgcolor={theme.vars.palette.primary.main}
          colorName="Primary"
        />
        <ColorCard
          color={theme.vars.palette.secondary.contrastText}
          bgcolor={theme.vars.palette.secondary.main}
          colorName="Secondary"
        />
        <Box display="flex" flex="1 1 0px" flexDirection="column">
          <Box display="flex" flex="1 1 0px" flexDirection="row">
            <ColorCard
              color={theme.vars.palette.info.contrastText}
              bgcolor={theme.vars.palette.info.main}
              colorName="Info"
            />
            <ColorCard
              color={theme.vars.palette.success.contrastText}
              bgcolor={theme.vars.palette.success.main}
              colorName="Success"
            />
          </Box>
          <Box display="flex" flex="1 1 0px" flexDirection="row">
            <ColorCard
              color={theme.vars.palette.warning.contrastText}
              bgcolor={theme.vars.palette.warning.main}
              colorName="Warning"
            />
            <ColorCard
              color={theme.vars.palette.error.contrastText}
              bgcolor={theme.vars.palette.error.main}
              colorName="Error"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
