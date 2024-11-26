/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 96.8,
  comparisonText: "Compared to last month's player engagement metrics",
  comparisonValue: 8.2,
  currentLocation: 'Central Arena - GameFi Metaverse',
  locationCheckCount: 632,
  monthlyChange: 11.4,
  monthlyVerificationCount: 5214,
  regions: [
    {
      name: 'Player Hub', time: '2:00 PM', verified: true,
    },
    {
      name: 'Marketplace', time: '3:30 PM', verified: true,
    },
    {
      name: 'Battle Arena', time: '4:45 PM', verified: false,
    },
    {
      name: 'Guild Hall', time: '5:15 PM', verified: true,
    },
    {
      name: 'Crafting Zone', time: '6:30 PM', verified: true,
    },
  ],
  status: 'Tracking player activity across zones...',
  title: 'GameFi Player Engagement',
  yearlyChange: 10.1,
  yearlyVerificationCount: 18_947,
  finalConfirmation: true,
  locationHeader: 'Zone',
  timeHeader: 'Last Activity',
  statusHeader: 'Verification Status',
}

export const GameFiData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '🎮 Total Players Logged-In',
    value: 150_372,
    change: 18.3,
    description: 'Active players in the last 24 hours',
  },
  statCard2: {
    headerTitle: '🏆 Total Battles Completed',
    value: 85_921,
    change: 15.7,
    description: 'Player engagements in battle zones',
  },
  statCard3: {
    headerTitle: '💰 Marketplace Transactions',
    value: 42_348,
    change: 12.5,
    description: 'Items traded in the marketplace',
  },
  statCard4: {
    headerTitle: '⛏️ Items Crafted',
    value: 18_754,
    change: 9.8,
    description: 'Items created in the crafting zones',
  },
  statCard5: {
    headerTitle: '👥 Guild Interactions',
    value: 23_548,
    change: 14.2,
    description: 'Collaborations and guild activities',
  },
  statCard6: {
    headerTitle: '📈 Engagement Peak',
    value: 12_435,
    change: 17.9,
    description: 'Players active in one hour',
  },
  dataCard: {
    headerTitle: 'GameFi Player Activity Map',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(250, 5, 150, 'scatter')} />,
    dataDescription:
      'This scatter map visualizes player activity across GameFi zones. High-activity areas like battle arenas and marketplaces are highlighted, while low-engagement zones are flagged for improvement.',
  },
  verificationSummary: VerificationSummaryData,
}
