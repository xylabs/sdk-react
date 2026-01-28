import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { XL1ColorLogoIcon } from './XL1ColorLogoIcon.tsx'

export default {
  title: 'Token/XL1ColorLogoIcon/local',
  component: XL1ColorLogoIcon,
} as Meta

const Template: StoryFn<typeof XL1ColorLogoIcon> = args => <XL1ColorLogoIcon {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }
