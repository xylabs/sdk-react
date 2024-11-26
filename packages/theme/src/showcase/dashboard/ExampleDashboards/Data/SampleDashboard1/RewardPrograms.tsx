/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 96.8,
  comparisonText: "Compared to last month's reward activity",
  comparisonValue: 4.2,
  currentLocation: 'Downtown Seattle Location',
  locationCheckCount: 842,
  monthlyChange: 5.6,
  monthlyVerificationCount: 3721,
  regions: [
    {
      name: 'Seattle', time: '8:30 AM', verified: true,
    },
    {
      name: 'Chicago', time: '10:45 AM', verified: true,
    },
    {
      name: 'New York', time: '1:15 PM', verified: false,
    },
    {
      name: 'Los Angeles', time: '3:30 PM', verified: true,
    },
    {
      name: 'Dallas', time: '6:45 PM', verified: true,
    },
  ],
  status: 'Validating reward redemptions...',
  title: 'Reward Program Activity',
  yearlyChange: 6.7,
  yearlyVerificationCount: 28_134,
  finalConfirmation: true,
  locationHeader: 'Location',
  timeHeader: 'Last Activity',
  statusHeader: 'Verification Status',
}

export const RewardProgramsData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '☕ Rewards Redeemed',
    value: 1_345_678,
    change: 12.3,
    description: 'Free drinks and offers claimed',
  },
  statCard2: {
    headerTitle: '🎁 Total Offers Issued',
    value: 2_451_932,
    change: 15.7,
    description: 'Special discounts and rewards shared',
  },
  statCard3: {
    headerTitle: '🌟 Active Members',
    value: 1_210_456,
    change: 8.9,
    description: 'Loyalty program participants',
  },
  statCard4: {
    headerTitle: '📊 Average Redemption Rate',
    value: 78.6,
    change: 4.3,
    description: '% of rewards redeemed per member',
  },
  statCard5: {
    headerTitle: '📅 Monthly New Signups',
    value: 45_324,
    change: 10.8,
    description: 'New members joining the rewards program',
  },
  statCard6: {
    headerTitle: '⏱️ Average Redemption Time',
    value: 1.2,
    change: -2.5,
    description: 'Time (in minutes) to process rewards',
  },
  dataCard: {
    headerTitle: 'Rewards Redemption Scatter Chart',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(150, 1, 100, 'scatter')} />,
    dataDescription:
      'This scatter chart shows when and where rewards are redeemed. Higher redemption activity indicates peak times and popular locations, helping improve targeted promotions.',
  },
  verificationSummary: VerificationSummaryData,
}
