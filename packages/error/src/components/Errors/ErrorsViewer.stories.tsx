import { Meta, StoryFn } from '@storybook/react'
import { ErrorsViewer, ErrorsViewerProps } from '@xylabs/react-error'

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

const Template: StoryFn<typeof ErrorsViewer> = (args: ErrorsViewerProps) => <ErrorsViewer {...args}></ErrorsViewer>

const Default = Template.bind({})
Default.args = {
  errors: [new Error('Error One'), new Error('Error Two')],
  title: 'Default',
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
