import { ComponentMeta, ComponentStory } from '@storybook/react'

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
} as ComponentMeta<typeof ErrorDialog>

const Template: ComponentStory<typeof ErrorDialog> = (args) => <ErrorDialog {...args}></ErrorDialog>

const Default = Template.bind({})
Default.args = {
  error: Error('Test Error'),
  title: 'Test Error',
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
