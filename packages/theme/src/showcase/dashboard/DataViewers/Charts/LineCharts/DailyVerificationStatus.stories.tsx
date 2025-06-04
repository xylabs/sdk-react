/* eslint-disable @typescript-eslint/no-explicit-any */
// DailyVerificationLineChart.stories.tsx

import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { DailyVerificationLineChart } from './DailyVerificationLineChart.tsx'
import { employeeCheckInsData } from './sampleVerificationData.ts'

export default {
  component: DailyVerificationLineChart,
  title: 'theme/showcase/charts/DailyVerificationLineChart',
} as Meta<typeof DailyVerificationLineChart>

const Template: StoryFn<typeof DailyVerificationLineChart> = (args: any) => <DailyVerificationLineChart {...args} />

export const Example = Template.bind({})
Example.args = { data: employeeCheckInsData }
