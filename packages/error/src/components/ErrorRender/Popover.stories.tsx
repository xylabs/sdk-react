import { Box } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { PopoverErrorRender } from './Popover.tsx'

export default {
  component: PopoverErrorRender,
  parameters: { layout: 'fullscreen' },
  title: 'error/PopoverErrorRender',
} as Meta

const Template: StoryFn<typeof PopoverErrorRender> = (args) => {
  return (
    <Box sx={{
      position: 'relative', height: '100vh', width: '100vw',
    }}
    >
      <Box sx={{
        position: 'absolute', top: 0, left: 0,
      }}
      >
        <PopoverErrorRender {...args} />
      </Box>
      <Box sx={{
        position: 'absolute', top: 0, right: 0,
      }}
      >
        <PopoverErrorRender {...args} />
      </Box>
      <Box sx={{
        position: 'absolute', bottom: 0, left: 0,
      }}
      >
        <PopoverErrorRender {...args} />
      </Box>
      <Box sx={{
        position: 'absolute', bottom: 0, right: 0,
      }}
      >
        <PopoverErrorRender {...args} />
      </Box>
    </Box>
  )
}

const Default = Template.bind({})
// eslint-disable-next-line @stylistic/max-len
Default.args = { error: new Error('This is a test error with a really long message. This is a test error with a really long message. This is a test error with a really long message. This is a test error with a really long message. ') }

export { Default }
