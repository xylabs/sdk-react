import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { BreadcrumbsEx } from './BreadcrumbsEx.tsx'

const StorybookEntry = {
  argTypes: {},
  component: BreadcrumbsEx,
  parameters: { docs: { page: null } },
  title: 'Components/BreadcrumbsEx',
} as Meta<typeof BreadcrumbsEx>

const Template: StoryFn<typeof BreadcrumbsEx> = args => (
  <BrowserRouter>
    <BreadcrumbsEx {...args}></BreadcrumbsEx>
  </BrowserRouter>
)

const SingleLevel = Template.bind({})
SingleLevel.args = {
  path: '/test',
  title: 'Default',
  titles: ['Test'],
}

const DoubleLevel = Template.bind({})
DoubleLevel.args = {
  path: '/test/level2',
  title: 'DoubleLevel',
  titles: ['Test', 'Level2'],
}

export { DoubleLevel, SingleLevel }

export default StorybookEntry
