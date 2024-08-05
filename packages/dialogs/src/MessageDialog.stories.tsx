import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { MessageDialog } from './MessageDialog.tsx'

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

const Template: StoryFn<typeof MessageDialog> = args => <MessageDialog {...args}>Test Message</MessageDialog>

const Default = Template.bind({})
Default.args = {
  open: true,
  title: 'Test Error',
}

export { Default }

export default StorybookEntry
