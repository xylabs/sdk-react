// DailyVerificationStackedAreaChart.stories.tsx

import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { DailyVerificationStackedAreaChart } from './DailyVerificationStackedAreaChart.tsx'
import { stackedVerificationData } from './sampleVerificationData.ts'

export default {
  component: DailyVerificationStackedAreaChart,
  title: 'theme/showcase/charts/DailyVerificationStackedAreaChart',
  argTypes: {},
} as Meta<typeof DailyVerificationStackedAreaChart>

const Template: StoryFn<typeof DailyVerificationStackedAreaChart> = args => <DailyVerificationStackedAreaChart {...args} />

export const Default = Template.bind({})
Default.args = { data: stackedVerificationData }
