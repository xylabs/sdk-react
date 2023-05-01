import { Meta, StoryFn } from '@storybook/react'

import { ErrorsViewer } from './ErrorsViewer'

const StorybookEntry = {
  argTypes: {},
  component: ErrorsViewer,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/ErrorsViewer',
} as Meta<typeof ErrorsViewer>

const Template: StoryFn<typeof ErrorsViewer> = (args) => <ErrorsViewer {...args}></ErrorsViewer>

const Default = Template.bind({})
Default.args = {
  errors: [Error('Error One'), Error('Error Two')],
  title: 'Default',
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
