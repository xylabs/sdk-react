import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { StyledListItemButton } from './StyledListItemButton.tsx'

export default {
  component: StyledListItemButton,
  title: 'components/StyledListItemButton',
} as Meta<typeof StyledListItemButton>

const Template: StoryFn<typeof StyledListItemButton> = args => <StyledListItemButton {...args} />

export const Default = Template.bind({})
Default.args = { children: 'Sample List Item' }

export const WithIconWrap = Template.bind({})
WithIconWrap.args = { children: <span>📁 Sample Icon Wrap</span> }
