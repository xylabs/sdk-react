import { Meta, StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { BasePage } from './BasePage'

const StorybookEntry = {
  argTypes: {},
  component: BasePage,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/BasePage',
} as Meta<typeof BasePage>

const Template: StoryFn<typeof BasePage> = (args) => (
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

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
