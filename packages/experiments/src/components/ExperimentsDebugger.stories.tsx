import { Meta, StoryFn } from '@storybook/react'
import { ExperimentsDebugger } from '@xylabs/react-experiments'

const StorybookEntry = {
  argTypes: {},
  component: ExperimentsDebugger,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'experiments/ExperimentsDebugger',
} as Meta<typeof ExperimentsDebugger>

const Template: StoryFn<typeof ExperimentsDebugger> = (args) => <ExperimentsDebugger {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
