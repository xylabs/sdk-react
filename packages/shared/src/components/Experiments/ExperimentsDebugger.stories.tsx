import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ExperimentsDebugger } from './index'

const StorybookEntry = {
  argTypes: {},
  component: ExperimentsDebugger,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/ExperimentsDebugger',
} as ComponentMeta<typeof ExperimentsDebugger>

const Template: ComponentStory<typeof ExperimentsDebugger> = (args) => <ExperimentsDebugger {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
