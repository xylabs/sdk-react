import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { XL1ColorLogoIcon } from './XL1ColorLogoIcon.tsx'
import { XYOColorLogoIcon } from './XYOColorLogoIcon.tsx'

export default {
  title: 'Token/XL1ColorLogoIcon/local',
  component: XL1ColorLogoIcon,
} as Meta

const TemplateXL1: StoryFn<typeof XL1ColorLogoIcon> = args => <XL1ColorLogoIcon {...args} />
const TemplateXYO: StoryFn<typeof XYOColorLogoIcon> = args => <XYOColorLogoIcon {...args} />

const XL1 = TemplateXL1.bind({})
XL1.args = {}
const XYO = TemplateXYO.bind({})
XYO.args = {}

export { XL1, XYO }
