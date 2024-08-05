import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ExperimentsDebugger } from './ExperimentsDebugger.tsx'

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

const Template: StoryFn<typeof ExperimentsDebugger> = args => <ExperimentsDebugger {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }

export default StorybookEntry
