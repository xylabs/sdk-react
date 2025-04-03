import {
  Box, Button, ButtonGroup, Chip, createTheme, CssBaseline, Stack, Typography, useColorScheme, useTheme,
} from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { DarkModeIconButtonForColorScheme } from '../Buttons/index.ts'
import { InvertibleMuiThemeProvider } from './InvertibleMuiThemeProvider.tsx'
import type { InvertibleMuiThemeProviderProps } from './InvertibleMuiThemeProviderProps.ts'

const StorybookEntry = {
  argTypes: {},
  component: InvertibleMuiThemeProvider,
  parameters: { docs: { page: null } },
  title: 'invertible-theme/InvertibleMuiThemeProvider',
} as Meta<typeof InvertibleMuiThemeProvider>

const Template: StoryFn<typeof InvertibleMuiThemeProvider> = (args: InvertibleMuiThemeProviderProps) => <InvertibleMuiThemeProvider {...args} />

const ThemeEnabledComponent = () => {
  const theme = useTheme()
  const {
    systemMode, mode, setMode,
  } = useColorScheme()

  const lightMode = mode === 'system' ? systemMode === 'light' : mode === 'light'
  const darkMode = mode === 'system' ? systemMode === 'dark' : mode === 'dark'

  return (
    <>
      <CssBaseline />
      <Stack direction="column" gap={2} alignItems="start">
        <Stack direction="row" gap={2}>
          Current Mode:
          {' '}
          <Chip label={mode} />
        </Stack>
        <ButtonGroup>
          <Button variant={darkMode ? 'contained' : 'outlined'} onClick={() => setMode('dark')}>
            DarkMode
          </Button>
          <Button variant={lightMode ? 'contained' : 'outlined'} onClick={() => setMode('light')}>
            LightMode
          </Button>
          <Button variant={systemMode ? 'contained' : 'outlined'} onClick={() => setMode('system')}>System</Button>
        </ButtonGroup>
        <Stack direction="row" gap={1}>
          <p>DarkModeIconButton:</p>
          <DarkModeIconButtonForColorScheme defaultLightModeColor="default" />
        </Stack>
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Box padding={3} border={`1px dotted ${theme.palette.divider}`}>
            <Typography sx={{ mb: 4 }} variant="h3">
              Typography h4
            </Typography>
            <Typography variant="h4" color={theme.palette.primary.main}>
              Color:
              {' '}
              {theme.palette.primary.main}
            </Typography>
            <Typography variant="h4" color={theme.palette.secondary.main}>
              Color:
              {' '}
              {theme.palette.secondary.main}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  )
}

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: '#303030',
          paper: '#424242',
        },
        primary: { main: '#4287f5' },
        secondary: { main: '#f59342' },
        text: { primary: '#ebebfb' },
      },
    },
    light: {
      palette: {
        background: {
          default: '#fff',
          paper: '#fff',
        },
        primary: { main: '#2c5ba8' },
        secondary: { main: '#ffb300' },
        text: { primary: '#111' },
      },
    },
  },
  cssVariables: { colorSchemeSelector: 'class' },
})

const Default = Template.bind({})
Default.args = {
  children: <ThemeEnabledComponent />,
  theme,
  // defaultMode is 'system' color scheme preference
}

const DefaultLight = Template.bind({})
DefaultLight.args = {
  children: <ThemeEnabledComponent />,
  defaultMode: 'light',
  theme,
}

const DefaultDark = Template.bind({})
DefaultDark.args = {
  children: <ThemeEnabledComponent />,
  defaultMode: 'dark',
  theme,
}

export {
  Default, DefaultDark, DefaultLight,
}

export default StorybookEntry
