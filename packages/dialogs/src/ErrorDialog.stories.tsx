import { Meta, StoryFn } from '@storybook/react'

import { ErrorDialog } from './ErrorDialog'

const StorybookEntry = {
  argTypes: {},
  component: ErrorDialog,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Dialogs/ErrorDialog',
} as Meta<typeof ErrorDialog>

const Template: StoryFn<typeof ErrorDialog> = (args) => <ErrorDialog {...args}></ErrorDialog>

const Default = Template.bind({})
Default.args = {
  error: Error('Test Error'),
  title: 'Test Error',
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
