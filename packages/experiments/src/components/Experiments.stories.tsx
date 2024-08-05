import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Experiment } from './Experiment.tsx'
import { Experiments } from './Experiments.tsx'

const StorybookEntry = {
  argTypes: {},
  component: Experiments,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'experiments/Experiments',
} as Meta<typeof Experiments>

const Template: StoryFn<typeof Experiments> = args => <Experiments {...args}></Experiments>

const Default = Template.bind({})
Default.args = {
  children: [
    <Experiment weight={50} key="true">
      True
    </Experiment>,
    <Experiment weight={50} key="false">
      False
    </Experiment>,
  ],
  name: 'StorybookAB',
}

export { Default }

export default StorybookEntry
