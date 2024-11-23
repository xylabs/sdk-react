import { Box, Stack } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import { ThemeModeButtonGroup } from '@xylabs/react-invertible-theme'
import React from 'react'

import { ColorShowcase } from './ColorShowcase.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ColorShowcase,
  parameters: { docs: { page: null }, layout: 'fullscreen' },
  title: 'Theme/ColorShowcase',
} as Meta<typeof ColorShowcase>

const Template: StoryFn<typeof ColorShowcase> = () => (
  <Stack display="flex" flexDirection="column" gap={2} alignItems="stretch" height="100vh" width="100vw">
    <Box alignSelf="center">
      <ThemeModeButtonGroup />
    </Box>
    <ColorShowcase />
  </Stack>
)

const Default = Template.bind({})
Default.args = {
  error: new Error('Test Error'),
  title: 'Test Error',
}

export { Default }

export default StorybookEntry
