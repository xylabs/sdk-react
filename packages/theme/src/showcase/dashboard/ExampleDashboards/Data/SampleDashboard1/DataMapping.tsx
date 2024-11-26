/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 98.7,
  comparisonText: "Compared to last month's data mapping accuracy",
  comparisonValue: 6.2,
  currentLocation: 'Austin, TX',
  locationCheckCount: 512,
  monthlyChange: 10.2,
  monthlyVerificationCount: 2374,
  regions: [
    {
      name: 'Downtown Austin', time: '10:45 AM', verified: true,
    },
    {
      name: 'North Loop', time: '11:30 AM', verified: true,
    },
    {
      name: 'South Congress', time: '12:15 PM', verified: false,
    },
    {
      name: 'Zilker', time: '2:00 PM', verified: true,
    },
    {
      name: 'Hyde Park', time: '3:45 PM', verified: false,
    },
  ],
  status: 'Mapping and verifying points...',
  title: 'Mapping Progress',
  yearlyChange: 8.1,
  yearlyVerificationCount: 11_563,
  finalConfirmation: true,
  locationHeader: 'Region',
  timeHeader: 'Last Updated',
  statusHeader: 'Verification Status',
}

export const DataMappingData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '🗺️ Total Data Points Mapped',
    value: 128_945_234,
    change: 12.3,
    description: 'High accuracy: 98.1%',
  },
  statCard2: {
    headerTitle: '🌍 Active Mapping Regions',
    value: 78,
    change: 15.4,
    description: 'Regions with active verifications',
  },
  statCard3: {
    headerTitle: '📍 Points of Interest',
    value: 1_054_832,
    change: 7.8,
    description: 'Verified and mapped points globally',
  },
  statCard4: {
    headerTitle: '🔍 Quality Checks',
    value: 2_540_983,
    change: 9.5,
    description: 'Quality verifications completed this year',
  },
  statCard5: {
    headerTitle: '📊 Verified Datasets',
    value: 345_780,
    change: 11.7,
    description: 'Datasets approved for mapping integration',
  },
  statCard6: {
    headerTitle: '⏱️ Average Verification Time',
    value: 3.4,
    change: -5.2,
    description: 'Time (in minutes) per data point verification',
  },
  dataCard: {
    headerTitle: 'Verification Scatter Map',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(140, 1, 79, 'scatter')} />,
    dataDescription:
      'Each point on the scatter map represents a location verification process. Verifications ensure data accuracy for mapping efforts, with higher verification counts improving confidence levels. Low-quality verifications are flagged.',
  },
  verificationSummary: VerificationSummaryData,
}
