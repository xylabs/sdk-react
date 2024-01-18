import { Box, Button, ButtonGroup, Chip, CssBaseline, experimental_extendTheme as extendTheme, Stack, Typography, useTheme } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'

import { DarkModeIconButtonForColorScheme } from '../Buttons'
import { InvertibleCssVarsProvider } from './InvertibleCssVarsProvider'
import { useColorSchemeEx } from './useColorSchemeEx'

const StorybookEntry = {
  argTypes: {},
  component: InvertibleCssVarsProvider,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'invertible-theme/InvertibleCssVarsProvider',
} as Meta<typeof InvertibleCssVarsProvider>

const Template: StoryFn<typeof InvertibleCssVarsProvider> = (args) => <InvertibleCssVarsProvider {...args} />

const ThemeEnabledComponent = () => {
  const theme = useTheme()
  const { darkMode, lightMode, mode, setMode } = useColorSchemeEx()

  return (
    <>
      <CssBaseline />
      <Stack direction={'column'} gap={2} alignItems="start">
        <Stack direction={'row'} gap={2}>
          Current Mode: <Chip label={mode} />
        </Stack>
        <ButtonGroup>
          <Button variant={darkMode ? 'contained' : 'outlined'} onClick={() => setMode('dark')}>
            DarkMode
          </Button>
          <Button variant={lightMode ? 'contained' : 'outlined'} onClick={() => setMode('light')}>
            LightMode
          </Button>
          <Button onClick={() => setMode('system')}>System</Button>
        </ButtonGroup>
        <Stack direction={'row'} gap={1}><p>DarkModeIconButton:</p><DarkModeIconButtonForColorScheme /></Stack>
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Box padding={3} border={`1px dotted ${theme.palette.divider}`}>
            <Typography variant="h3">marginBottom of {theme.spacing(4)}</Typography>
            <Typography variant="h4" color={theme.palette.primary.main}>
              Color: {theme.palette.primary.main}
            </Typography>
            <Typography variant="h4" color={theme.palette.secondary.main}>
              Color: {theme.palette.secondary.main}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  )
}

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: '#303030',
          paper: '#424242',
        },
        primary: {
          main: '#4287f5',
        },
        secondary: {
          main: '#f59342',
        },
        text: {
          primary: '#ebebfb',
        },
      },
    },
    light: {
      palette: {
        background: {
          default: '#fff',
          paper: '#fff',
        },
        primary: {
          main: '#2c5ba8',
        },
        secondary: {
          main: '#ffb300',
        },
        text: {
          primary: '#111',
        },
      },
    },
  },
})

const Default = Template.bind({})
Default.args = {
  children: <ThemeEnabledComponent />,
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

export { Default, DefaultDark, DefaultLight }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
