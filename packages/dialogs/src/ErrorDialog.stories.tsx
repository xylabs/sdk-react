import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import type { ErrorDialogProps } from './ErrorDialog.tsx'
import { ErrorDialog } from './ErrorDialog.tsx'

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

const Template: StoryFn<typeof ErrorDialog> = (args: ErrorDialogProps) => <ErrorDialog {...args}></ErrorDialog>

const Default = Template.bind({})
Default.args = {
  error: new Error('Test Error'),
  title: 'Test Error',
}

export { Default }

export default StorybookEntry
