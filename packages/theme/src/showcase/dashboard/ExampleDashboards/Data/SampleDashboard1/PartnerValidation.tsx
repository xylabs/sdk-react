/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 99.2,
  comparisonText: "Compared to last month's partner validations",
  comparisonValue: 7.1,
  currentLocation: 'Global Partner Network',
  locationCheckCount: 752,
  monthlyChange: 9.3,
  monthlyVerificationCount: 4324,
  regions: [
    {
      name: 'New York Office', time: '10:15 AM', verified: true,
    },
    {
      name: 'London Office', time: '12:45 PM', verified: true,
    },
    {
      name: 'Tokyo Office', time: '3:00 PM', verified: false,
    },
    {
      name: 'Sydney Office', time: '6:30 PM', verified: true,
    },
    {
      name: 'Berlin Office', time: '8:15 PM', verified: true,
    },
  ],
  status: 'Validating partnerships...',
  title: 'Partner Verification Summary',
  yearlyChange: 15.4,
  yearlyVerificationCount: 16_523,
  finalConfirmation: true,
  locationHeader: 'Office',
  timeHeader: 'Last Validation',
  statusHeader: 'Validation Status',
}

export const PartnerValidationData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '✅ Total Partners Validated',
    value: 14_578,
    change: 18.2,
    description: 'Partners verified for compliance',
  },
  statCard2: {
    headerTitle: '🌐 Active Partnerships',
    value: 6234,
    change: 12.5,
    description: 'Partners actively working within agreements',
  },
  statCard3: {
    headerTitle: '🔎 Compliance Checks Passed',
    value: 5982,
    change: 10.1,
    description: 'Completed compliance verifications',
  },
  statCard4: {
    headerTitle: '📊 Validation Accuracy',
    value: 99.2,
    change: 1,
    description: '% of accurate partner validations',
  },
  statCard5: {
    headerTitle: '📋 Pending Validations',
    value: 342,
    change: -4.3,
    description: 'Awaiting compliance approval',
  },
  statCard6: {
    headerTitle: '⏱️ Average Validation Time',
    value: 4.8,
    change: -2.7,
    description: 'Time (in minutes) per partner validation',
  },
  dataCard: {
    headerTitle: 'Partner Validation Scatter Chart',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(120, 1, 80, 'scatter')} />,
    dataDescription:
      'Each point on the scatter map represents a partner’s validation process. Clusters indicate areas with high validation activity, ensuring compliance and strong partnerships.',
  },
  verificationSummary: VerificationSummaryData,
}
