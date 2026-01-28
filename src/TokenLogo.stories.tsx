import type { Meta, StoryFn } from '@storybook/react-vite'
import { XL1ColorLogoIcon, XYOColorLogoIcon } from '@xylabs/react-crypto'
import React from 'react'

export default {
  title: 'Token/XL1ColorLogoIcon/exported',
  component: XL1ColorLogoIcon
} as Meta

const TemplateXL1: StoryFn<typeof XL1ColorLogoIcon> = (args) => <XL1ColorLogoIcon {...args} />
const TemplateXYO: StoryFn<typeof XYOColorLogoIcon> = (args) => <XYOColorLogoIcon {...args} />

const XL1 = TemplateXL1.bind({})
XL1.args = {}
const XYO = TemplateXYO.bind({})
XYO.args = {}

export { XL1, XYO }