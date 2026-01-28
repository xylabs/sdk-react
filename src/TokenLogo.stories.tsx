import type { Meta, StoryFn } from '@storybook/react-vite'
import { XL1ColorLogoIcon } from '@xylabs/react-crypto'
import React from 'react'

export default {
  title: 'Token/XL1ColorLogoIcon/exported',
  component: XL1ColorLogoIcon
} as Meta

const Template: StoryFn<typeof XL1ColorLogoIcon> = (args) => <XL1ColorLogoIcon {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }