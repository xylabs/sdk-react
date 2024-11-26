import type { ButtonGroupProps } from '@mui/material'
import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

import { useColorSchemeEx } from '../InvertibleMuiThemeProvider/index.ts'

export const ThemeModeButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const {
    darkMode, lightMode, systemMode, setMode,
  } = useColorSchemeEx()

  return (
    <ButtonGroup {...props}>
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
  )
}
