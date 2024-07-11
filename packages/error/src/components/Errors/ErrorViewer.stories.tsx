import { Meta, StoryFn } from '@storybook/react'
import { ErrorViewer } from '@xylabs/react-error'

const StorybookEntry = {
  argTypes: {},
  component: ErrorViewer,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/ErrorViewer',
} as Meta<typeof ErrorViewer>

const Template: StoryFn<typeof ErrorViewer> = (args) => <ErrorViewer {...args}></ErrorViewer>

const Default = Template.bind({})
Default.args = {
  title: 'Default',
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
