/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 96.5,
  comparisonText: "Compared to last month's tracking data",
  comparisonValue: 4.9,
  currentLocation: 'Chicago, IL',
  locationCheckCount: 412,
  monthlyChange: 7.8,
  monthlyVerificationCount: 2482,
  regions: [
    {
      name: 'Headquarters', time: '9:00 AM', verified: true,
    },
    {
      name: 'Remote Office 1', time: '10:15 AM', verified: true,
    },
    {
      name: 'Warehouse Facility', time: '12:30 PM', verified: false,
    },
    {
      name: 'Regional Hub', time: '2:45 PM', verified: true,
    },
    {
      name: 'Satellite Office', time: '4:00 PM', verified: false,
    },
  ],
  status: 'Processing employee check-ins...',
  title: 'Employee Activity Monitoring',
  yearlyChange: 6.5,
  yearlyVerificationCount: 13_572,
  finalConfirmation: true,
  locationHeader: 'Office',
  timeHeader: 'Last Check-In',
  statusHeader: 'Verification Status',
}

export const EmployeeTrackingData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '👥 Total Employee Check-Ins',
    value: 1_023_874,
    change: 12.7,
    description: 'Verified across all locations',
  },
  statCard2: {
    headerTitle: '🏢 Active Worksites',
    value: 125,
    change: 8.4,
    description: 'Locations with employee activity',
  },
  statCard3: {
    headerTitle: '⏱️ Average Check-In Time',
    value: 4.2,
    change: -3.1,
    description: 'Minutes per employee verification',
  },
  statCard4: {
    headerTitle: '📈 Verified Records',
    value: 2_784_365,
    change: 10.3,
    description: 'Employee activity logs verified this year',
  },
  statCard5: {
    headerTitle: '📊 Daily Check-Ins',
    value: 8213,
    change: 5.9,
    description: 'Check-ins processed per day',
  },
  statCard6: {
    headerTitle: '🌍 Global Workforce Coverage',
    value: 92,
    change: 14.8,
    description: 'Countries with active employee tracking',
  },
  dataCard: {
    headerTitle: 'Employee Check-In Scatter Map',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(160, 3, 85, 'scatter')} />,
    dataDescription:
      'This scatter map displays employee check-ins across all active worksites. High verification areas reflect consistent activity, while flagged points indicate missing or delayed check-ins.',
  },
  verificationSummary: VerificationSummaryData,
}
