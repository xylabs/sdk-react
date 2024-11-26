import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { StyledDualRingPieChart } from './DualRingPieChart.tsx'

export default {
  title: 'theme/showcase/charts/StyledDualRingPieChart',
  component: StyledDualRingPieChart,
  argTypes: {
    showLegend: {
      control: 'boolean',
      description: 'Show or hide the legend',
    },
  },
} as Meta<typeof StyledDualRingPieChart>

const Template: StoryFn<typeof StyledDualRingPieChart> = args => <StyledDualRingPieChart {...args} />

export const Default = Template.bind({})
Default.args = {
  data01: [
    { name: 'Residential areas', value: 38 },
    { name: 'Public parking lots and garages', value: 10.9 },
    { name: 'Public transportation hubs', value: 7.4 },
    { name: 'Commercial and retail locations', value: 4.1 },
    { name: 'Workplace', value: 2.7 },
  ],
  showLegend: true, // Toggle this to show/hide the legend
}
