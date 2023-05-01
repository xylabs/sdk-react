import { Meta, StoryFn } from '@storybook/react'

import { MessageDialog } from './MessageDialog'

const StorybookEntry = {
  argTypes: {},
  component: MessageDialog,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Dialogs/MessageDialog',
} as Meta<typeof MessageDialog>

const Template: StoryFn<typeof MessageDialog> = (args) => <MessageDialog {...args}>Test Message</MessageDialog>

const Default = Template.bind({})
Default.args = {
  open: true,
  title: 'Test Error',
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
