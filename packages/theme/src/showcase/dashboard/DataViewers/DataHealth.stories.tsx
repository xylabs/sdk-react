import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import type { DataHealthProps } from './DataHealth.tsx'
import { DataHealth } from './DataHealth.tsx'

const sampleData = {
  comparisonText: 'Compared to last month',
  comparisonValue: 24.17,
  status: 'updating health status now ...',
}

export default {
  component: DataHealth,
  title: 'theme/showcase/cards/DataHealth',
  argTypes: {
    comparisonText: { control: 'text' },
    comparisonValue: { control: 'number' },
    status: { control: 'text' },
  },
} as Meta<DataHealthProps>

const Template: StoryFn<typeof DataHealth> = args => <DataHealth {...args} />

export const Default = Template.bind({})
Default.args = {
  comparisonText: sampleData.comparisonText,
  comparisonValue: sampleData.comparisonValue,
  status: sampleData.status,
}

export const HighPositiveChange = Template.bind({})
HighPositiveChange.args = {
  comparisonText: 'Compared to last month',
  comparisonValue: 75.34,
  status: 'updating health status now ...',
}

export const NegativeChange = Template.bind({})
NegativeChange.args = {
  comparisonText: 'Compared to last month',
  comparisonValue: -10.47,
  status: 'updating health status now ...',
}
