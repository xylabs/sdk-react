import { Box, CssBaseline, Typography, useTheme } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { InvertableThemeProvider } from './InvertableThemeProvider'

const StorybookEntry = {
  argTypes: {},
  component: InvertableThemeProvider,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/InvertableThemeProvider',
} as ComponentMeta<typeof InvertableThemeProvider>

const Template: ComponentStory<typeof InvertableThemeProvider> = (args) => (
  <InvertableThemeProvider {...args}></InvertableThemeProvider>
)

const ThemeEnabledComponent = () => {
  const theme = useTheme()
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Typography variant="h3">marginBottom of {theme.spacing(4)}</Typography>
        <Typography variant="h4" color={theme.palette.primary.main}>
          Color: {theme.palette.primary.main}
        </Typography>
        <Typography variant="h4" color={theme.palette.secondary.main}>
          Color: {theme.palette.secondary.main}
        </Typography>
      </Box>
    </>
  )
}

const Default = Template.bind({})
Default.args = {
  children: <ThemeEnabledComponent />,
}

const DarkThemeEnabled = Template.bind({})
DarkThemeEnabled.args = {
  children: <ThemeEnabledComponent />,
  dark: true,
  darkTheme: {
    palette: {
      background: {
        default: '#303030',
        paper: '#424242',
      },
      mode: 'dark',
      primary: {
        main: '#ebebfb',
      },
      secondary: {
        main: '#ffb300',
      },
      text: {
        primary: '#ebebfb',
      },
    },
  },
}

export { DarkThemeEnabled, Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
