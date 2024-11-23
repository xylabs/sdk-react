import {
  Button, ButtonGroup, Chip, Stack,
} from '@mui/material'
import React from 'react'

import { useColorSchemeEx } from '../InvertibleMuiThemeProvider/index.ts'

export const ThemeModeButtonGroup: React.FC = () => {
  const {
    darkMode, lightMode, systemMode, mode, setMode,
  } = useColorSchemeEx()

  return (
    <Stack direction="column" gap={2} alignItems="start">
      <Stack direction="row" gap={2}>
        Current Mode:
        {' '}
        <Chip label={mode} />
      </Stack>
      <ButtonGroup>
        <Button
          variant={darkMode ? 'contained' : 'outlined'}
          onClick={() => setMode('dark')}
        >
          Dark Mode
        </Button>
        <Button
          variant={lightMode ? 'contained' : 'outlined'}
          onClick={() => setMode('light')}
        >
          Light Mode
        </Button>
        <Button
          variant={systemMode ? 'contained' : 'outlined'}
          onClick={() => setMode('system')}
        >
          System
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
