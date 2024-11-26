/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 97.5,
  comparisonText: "Compared to last month's supply chain accuracy",
  comparisonValue: 5.4,
  currentLocation: 'Dallas Manufacturing Plant',
  locationCheckCount: 1230,
  monthlyChange: 9.1,
  monthlyVerificationCount: 5432,
  regions: [
    {
      name: 'Dallas Plant', time: '7:45 AM', verified: true,
    },
    {
      name: 'Los Angeles Port', time: '9:30 AM', verified: true,
    },
    {
      name: 'New York Distribution', time: '11:15 AM', verified: true,
    },
    {
      name: 'Shanghai Hub', time: '3:00 PM', verified: true,
    },
    {
      name: 'Berlin Distribution Center', time: '8:30 PM', verified: false,
    },
  ],
  status: 'Tracking shipments and validating routes...',
  title: 'Supply Chain Performance',
  yearlyChange: 7.2,
  yearlyVerificationCount: 65_893,
  finalConfirmation: true,
  locationHeader: 'Location',
  timeHeader: 'Last Updated',
  statusHeader: 'Verification Status',
}

export const SupplyChainData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '🚛 Shipments Verified',
    value: 3_847_342,
    change: 8.5,
    description: 'Validations of shipments globally',
  },
  statCard2: {
    headerTitle: '🏭 Active Factories',
    value: 65,
    change: 6.3,
    description: 'Factories currently operational',
  },
  statCard3: {
    headerTitle: '🌍 Countries Covered',
    value: 92,
    change: 3.7,
    description: 'Regions in the global network',
  },
  statCard4: {
    headerTitle: '⛴️ Shipping Routes Monitored',
    value: 1245,
    change: 12.4,
    description: 'Active routes tracked for shipments',
  },
  statCard5: {
    headerTitle: '📦 On-Time Deliveries',
    value: 89.7,
    change: 5.1,
    description: '% of shipments delivered on schedule',
  },
  statCard6: {
    headerTitle: '⏱️ Average Validation Time',
    value: 4.2,
    change: -3.1,
    description: 'Time (in hours) per shipment validation',
  },
  dataCard: {
    headerTitle: 'Shipping Validation Scatter Chart',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(200, 10, 150, 'scatter')} />,
    dataDescription:
      'This scatter chart visualizes the shipment validations across the global supply chain. Data points reflect factory operations, shipping routes, and distribution centers, ensuring efficiency and accuracy.',
  },
  verificationSummary: VerificationSummaryData,
}
