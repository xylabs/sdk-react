import { Box } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { TypographyShowcase } from './TypographyShowcase.tsx'

const StorybookEntry = {
  argTypes: {},
  component: TypographyShowcase,
  parameters: { docs: { page: null } },
  title: 'theme/showcase/TypographyShowcase',
} as Meta<typeof TypographyShowcase>

const Template: StoryFn<typeof TypographyShowcase> = () => (
  <Box height="100vh" width="100vw">
    <TypographyShowcase></TypographyShowcase>
  </Box>
)

const Default = Template.bind({})
Default.args = {
  error: new Error('Test Error'),
  title: 'Test Error',
}

export { Default }

export default StorybookEntry
