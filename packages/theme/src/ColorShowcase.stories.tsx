import { Box } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ColorShowcase } from './ColorShowcase.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ColorShowcase,
  parameters: { docs: { page: null }, layout: 'fullscreen' },
  title: 'Theme/ColorShowcase',
} as Meta<typeof ColorShowcase>

const Template: StoryFn<typeof ColorShowcase> = () => (
  <Box display="flex" height="100vh" width="100vw">
    <ColorShowcase></ColorShowcase>
  </Box>
)

const Default = Template.bind({})
Default.args = {
  error: new Error('Test Error'),
  title: 'Test Error',
}

export { Default }

export default StorybookEntry
