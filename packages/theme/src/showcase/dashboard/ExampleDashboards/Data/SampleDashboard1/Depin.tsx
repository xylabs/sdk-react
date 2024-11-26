/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 99.2,
  comparisonText: "Compared to last month's infrastructure checks",
  comparisonValue: 5.6,
  currentLocation: 'Denver, CO',
  locationCheckCount: 642,
  monthlyChange: 12.4,
  monthlyVerificationCount: 3122,
  regions: [
    {
      name: 'Capitol Hill', time: '9:30 AM', verified: true,
    },
    {
      name: 'Five Points', time: '11:00 AM', verified: true,
    },
    {
      name: 'Cherry Creek', time: '12:45 PM', verified: false,
    },
    {
      name: 'LoDo', time: '3:15 PM', verified: true,
    },
    {
      name: 'Baker', time: '4:30 PM', verified: false,
    },
  ],
  status: 'Updating infrastructure points...',
  title: 'Infrastructure Validation',
  yearlyChange: 9.8,
  yearlyVerificationCount: 14_892,
  finalConfirmation: true,
  locationHeader: 'Region',
  timeHeader: 'Last Verified',
  statusHeader: 'Verification Status',
}

export const DepinMappingData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '🏗️ Total Nodes Verified',
    value: 1_023_567,
    change: 14.1,
    description: 'Validated across all active networks',
  },
  statCard2: {
    headerTitle: '🔗 Network Integrations',
    value: 250,
    change: 18.5,
    description: 'Successful integrations this year',
  },
  statCard3: {
    headerTitle: '📡 Active Devices',
    value: 2_945_123,
    change: 9.3,
    description: 'Devices currently connected to networks',
  },
  statCard4: {
    headerTitle: '📍 Verified Locations',
    value: 842_376,
    change: 11.6,
    description: 'Verified DePIN access points',
  },
  statCard5: {
    headerTitle: '📊 Infrastructure Quality Checks',
    value: 563_481,
    change: 10.2,
    description: 'Assessments completed this year',
  },
  statCard6: {
    headerTitle: '⏱️ Average Validation Time',
    value: 2.8,
    change: -7.4,
    description: 'Minutes per infrastructure validation',
  },
  dataCard: {
    headerTitle: 'DePIN Verification Scatter Map',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(150, 5, 100, 'scatter')} />,
    dataDescription:
      'This scatter map visualizes DePIN verification activities. High verification density areas indicate strong network reliability, while flagged points require additional checks.',
  },
  verificationSummary: VerificationSummaryData,
}
