import { Home } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { RotationAnimation } from './RotationAnimation.tsx'

export default {
  title: 'animations/RotationAnimation',
  component: RotationAnimation,
} as Meta

const Template: StoryFn<typeof RotationAnimation> = args => <RotationAnimation {...args} />

const Default = Template.bind({})
Default.args = { children: null }

const WithHoverActivation = Template.bind({})
WithHoverActivation.args = {
  children: (
    <Stack alignItems="center">
      <IconButton>
        <Home />
      </IconButton>
    </Stack>
  ),
  rotation: 20,
}

const WithTimerActivation = Template.bind({})
WithTimerActivation.args = {
  activation: 'timer',
  children: (
    <Stack alignItems="center">
      <IconButton>
        <Home />
      </IconButton>
    </Stack>
  ),
  rotation: 20,
}

export {
  Default, WithHoverActivation, WithTimerActivation,
}
