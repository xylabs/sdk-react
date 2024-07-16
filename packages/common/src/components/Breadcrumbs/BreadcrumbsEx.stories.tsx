import { Meta, StoryFn } from '@storybook/react'
import { BreadcrumbsEx } from '@xylabs/react-common'
import { BrowserRouter } from 'react-router-dom'

const StorybookEntry = {
  argTypes: {},
  component: BreadcrumbsEx,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/BreadcrumbsEx',
} as Meta<typeof BreadcrumbsEx>

const Template: StoryFn<typeof BreadcrumbsEx> = (args) => (
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

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
