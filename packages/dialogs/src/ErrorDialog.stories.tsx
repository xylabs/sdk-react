import { Meta, StoryFn } from '@storybook/react'
import { ErrorDialog, ErrorDialogProps } from '@xylabs/react-dialogs'

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

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
