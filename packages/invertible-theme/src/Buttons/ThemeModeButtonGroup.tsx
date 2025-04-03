import type { ButtonGroupProps } from '@mui/material'
import {
  Button, ButtonGroup, useColorScheme,
} from '@mui/material'
import React from 'react'

/** @deprecated use ColorSchemeButton from @xylabs/theme instead */
export const ThemeModeButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { mode, setMode } = useColorScheme()
  const darkMode = mode === 'dark'
  const lightMode = mode === 'light'
  const systemMode = mode === 'system'

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
