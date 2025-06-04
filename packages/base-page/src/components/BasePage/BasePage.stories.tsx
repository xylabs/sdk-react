import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { BasePage } from './BasePage.tsx'

const StorybookEntry = {
  argTypes: {},
  component: BasePage,
  parameters: { docs: { page: null } },
  title: 'Components/BasePage',
} as Meta<typeof BasePage>

const Template: StoryFn<typeof BasePage> = args => (
  <BrowserRouter>
    <BasePage {...args}></BasePage>
  </BrowserRouter>
)

const AppBar = () => <div>AppBar</div>

const Default = Template.bind({})
Default.args = {
  appBar: <AppBar />,
  title: 'Default',
}

const WithShareImage = Template.bind({})
WithShareImage.args = {
  appBar: <AppBar />,
  title: 'WithShareImage',
  metaServer: { shareImage: 'https://via.placeholder.com/1200x630' },
}

export { Default, WithShareImage }

export default StorybookEntry
