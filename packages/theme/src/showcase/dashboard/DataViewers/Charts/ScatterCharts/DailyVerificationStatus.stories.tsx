// DailyVerificationScatterChart.stories.tsx

import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { DailyVerificationScatterChart } from './DailyVerificationScatterChart.tsx'
import {
  employeeCheckInsData, mobileAppQuestCheckInsData, productDeliveryCheckInsData,
} from './sampleVerificationData.ts'

export default {
  component: DailyVerificationScatterChart,
  title: 'theme/showcase/charts/DailyVerificationScatterChart',
  argTypes: {},
} as Meta<typeof DailyVerificationScatterChart>

const Template: StoryFn<typeof DailyVerificationScatterChart> = args => <DailyVerificationScatterChart {...args} />

export const EmployeeCheckIns = Template.bind({})
EmployeeCheckIns.args = { data: employeeCheckInsData }

export const ProductDeliveryCheckIns = Template.bind({})
ProductDeliveryCheckIns.args = { data: productDeliveryCheckInsData }

export const MobileAppQuestCheckIns = Template.bind({})
MobileAppQuestCheckIns.args = { data: mobileAppQuestCheckInsData }
