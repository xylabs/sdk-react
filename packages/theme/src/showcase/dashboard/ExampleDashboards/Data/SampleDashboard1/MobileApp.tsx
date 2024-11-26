/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 92.8,
  comparisonText: "Compared to last month's engagement metrics",
  comparisonValue: 8.6,
  currentLocation: 'Global User Base',
  locationCheckCount: 1245,
  monthlyChange: 12.4,
  monthlyVerificationCount: 8342,
  regions: [
    {
      name: 'North America', time: '9:15 AM', verified: true,
    },
    {
      name: 'Europe', time: '11:30 AM', verified: true,
    },
    {
      name: 'Asia-Pacific', time: '2:45 PM', verified: true,
    },
    {
      name: 'South America', time: '5:30 PM', verified: true,
    },
    {
      name: 'Africa', time: '7:00 PM', verified: false,
    },
  ],
  status: 'Tracking user engagement...',
  title: 'User Activity Summary',
  yearlyChange: 14.3,
  yearlyVerificationCount: 32_485,
  finalConfirmation: true,
  locationHeader: 'Region',
  timeHeader: 'Last Check-In',
  statusHeader: 'Engagement Status',
}

export const MobileAppData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '📱 Total App Users',
    value: 2_394_582,
    change: 14.6,
    description: 'Active users in the past month',
  },
  statCard2: {
    headerTitle: '⏱️ Average Session Time',
    value: 5.2,
    change: 3.4,
    description: 'Minutes per session on average',
  },
  statCard3: {
    headerTitle: '📈 Daily Active Users (DAU)',
    value: 1_045_678,
    change: 10.9,
    description: 'Users active within the last 24 hours',
  },
  statCard4: {
    headerTitle: '🛒 Monthly Purchases',
    value: 234_874,
    change: 12.8,
    description: 'In-app purchases completed',
  },
  statCard5: {
    headerTitle: '⭐ User Ratings',
    value: 4.7,
    change: 0.1,
    description: 'Average rating across app stores',
  },
  statCard6: {
    headerTitle: '🔔 Notifications Opened',
    value: 348_219,
    change: 15.2,
    description: 'Push notifications opened this month',
  },
  dataCard: {
    headerTitle: 'User Engagement Scatter Map',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(150, 1, 100, 'scatter')} />,
    dataDescription:
      'Each point on the scatter map reflects app usage at specific hours of the day. Clusters indicate peak usage times, helping optimize app notifications and performance.',
  },
  verificationSummary: VerificationSummaryData,
}
