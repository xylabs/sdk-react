import { Box } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ThemeShowcase } from './ThemeShowcase.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ThemeShowcase,
  parameters: { docs: { page: null } },
  title: 'theme/showcase/ThemeShowcase',
} as Meta<typeof ThemeShowcase>

const Template: StoryFn<typeof ThemeShowcase> = () => (
  // Accounts for extra padding added by storybook container
  <Box height="96vh" width="96vw">
    <ThemeShowcase></ThemeShowcase>
  </Box>
)

const Default = Template.bind({})
Default.args = {
  error: new Error('Test Error'),
  title: 'Test Error',
}

export { Default }

export default StorybookEntry
