import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import type { VerificationSummaryProps } from './VerificationSummaryProps.tsx'
import { VerificationSummary } from './VerificationSummaryProps.tsx'

export default {
  component: VerificationSummary,
  title: 'shared/VerificationSummary',
  argTypes: {
    comparisonText: { control: 'text' },
    comparisonValue: { control: 'number' },
    status: { control: 'text' },
  },
} as Meta<VerificationSummaryProps>

const Template: StoryFn<typeof VerificationSummary> = args => <VerificationSummary {...args} />

// Employee Check-ins Example
export const EmployeeCheckIns = Template.bind({})
EmployeeCheckIns.args = {
  title: 'Employee Location Check-ins',
  comparisonText: "Compared to last month's checks",
  comparisonValue: 4.5,
  status: 'updating location accuracy...',
  accuracyPercentage: 97.2,
  locationCheckCount: 432,
  locationHeader: 'Location',
  timeHeader: 'Time',
  statusHeader: 'Status',
  monthlyChange: 8.9,
  monthlyVerificationCount: 1842,
  yearlyChange: 5.3,
  yearlyVerificationCount: 8407,
  currentLocation: 'San Francisco, CA',
  regions: [
    {
      name: 'Daly City, CA', time: '8:00 AM', verified: true,
    },
    {
      name: 'South San Francisco, CA', time: '9:30 AM', verified: true,
    },
    {
      name: 'San Bruno, CA', time: '11:15 AM', verified: false,
    },
    {
      name: 'Burlingame, CA', time: '1:00 PM', verified: false,
    },
    {
      name: 'San Mateo, CA', time: '3:00 PM', verified: true,
    },
  ],
}

// Product Delivery Check-ins Example (East Coast to West Coast)
export const ProductDeliveryCheckIns = Template.bind({})
ProductDeliveryCheckIns.args = {
  title: 'Product Delivery Check-ins',
  comparisonText: 'Compared to last delivery cycle',
  comparisonValue: 12.3,
  status: 'Delivery en route...',
  accuracyPercentage: 99.1,
  locationHeader: 'Location',
  timeHeader: 'Time',
  statusHeader: 'Status',
  locationCheckCount: 5,
  monthlyChange: 15.2,
  monthlyVerificationCount: 782,
  yearlyChange: 6.4,
  yearlyVerificationCount: 3056,
  currentLocation: 'Los Angeles, CA',
  regions: [
    {
      name: 'New York, NY', time: 'Day 1', verified: true,
    },
    {
      name: 'Chicago, IL', time: 'Day 2', verified: false,
    },
    {
      name: 'Denver, CO', time: 'Day 3', verified: false,
    },
    {
      name: 'Las Vegas, NV', time: 'Day 4', verified: true,
    },
    {
      name: 'Los Angeles, CA', time: 'Day 5', verified: false,
    },
  ],
  finalConfirmation: true,
}

// Mobile App Quest Check-ins Example (Quest Completion after 5 Check-ins)
export const MobileAppQuestCheckIns = Template.bind({})
MobileAppQuestCheckIns.args = {
  title: 'Mobile App Quest Check-ins',
  comparisonText: 'Quest Progress',
  comparisonValue: 75,
  status: 'Verifying quest progress...',
  accuracyPercentage: 100,
  locationCheckCount: 5,
  monthlyChange: 0,
  monthlyVerificationCount: 5,
  yearlyChange: 0,
  yearlyVerificationCount: 20,
  currentLocation: 'Austin, TX',
  locationHeader: 'Location',
  timeHeader: 'Time',
  statusHeader: 'Status',
  regions: [
    {
      name: 'Round Rock, TX', time: '10:00 AM', verified: true,
    },
    {
      name: 'Pflugerville, TX', time: '11:30 AM', verified: true,
    },
    {
      name: 'Cedar Park, TX', time: '1:00 PM', verified: true,
    },
    {
      name: 'Georgetown, TX', time: '2:45 PM', verified: false,
    },
    {
      name: 'Austin, TX', time: '4:00 PM', verified: true,
    },
  ],
  finalConfirmation: true,
}
