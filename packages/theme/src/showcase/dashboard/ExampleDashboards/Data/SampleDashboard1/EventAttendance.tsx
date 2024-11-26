/* eslint-disable @stylistic/max-len */

import React from 'react'

import type { VerificationSummaryProps } from '../../../DataViewers/index.ts'
import { DailyVerificationScatterChart, generateVerificationData } from '../../../DataViewers/index.ts'
import type { Dashboard1DataProps } from '../../SampleDashboard1.tsx'

export const VerificationSummaryData: VerificationSummaryProps = {
  accuracyPercentage: 94.3,
  comparisonText: "Compared to last month's event attendance data",
  comparisonValue: 5.6,
  currentLocation: 'Madison Square Garden, NY',
  locationCheckCount: 712,
  monthlyChange: 9.4,
  monthlyVerificationCount: 4218,
  regions: [
    {
      name: 'Main Entrance', time: '6:30 PM', verified: true,
    },
    {
      name: 'Concessions Area 1', time: '7:15 PM', verified: true,
    },
    {
      name: 'VIP Lounge', time: '7:45 PM', verified: false,
    },
    {
      name: 'Upper Deck', time: '8:30 PM', verified: true,
    },
    {
      name: 'Parking Lot', time: '9:15 PM', verified: false,
    },
  ],
  status: 'Monitoring attendee check-ins...',
  title: 'Event Attendance Tracking',
  yearlyChange: 7.2,
  yearlyVerificationCount: 16_394,
  finalConfirmation: true,
  locationHeader: 'Area',
  timeHeader: 'Last Activity',
  statusHeader: 'Verification Status',
}

export const EventAttendanceData: Dashboard1DataProps = {
  statCard1: {
    headerTitle: '🎟️ Total Attendees Checked-In',
    value: 56_783,
    change: 15.4,
    description: 'Verified attendees this event',
  },
  statCard2: {
    headerTitle: '📍 Verified Areas',
    value: 32,
    change: 10.8,
    description: 'Checked-in and verified access points',
  },
  statCard3: {
    headerTitle: '⏱️ Average Wait Time',
    value: 2.8,
    change: -4.6,
    description: 'Minutes per attendee check-in',
  },
  statCard4: {
    headerTitle: '🏟️ Total Event Capacity',
    value: 75_000,
    change: 0,
    description: 'Maximum allowed for this event',
  },
  statCard5: {
    headerTitle: '🍿 Concession Check-Ins',
    value: 8921,
    change: 6.2,
    description: 'Visitors verified at concession areas',
  },
  statCard6: {
    headerTitle: '📊 Daily Check-In Peak',
    value: 9345,
    change: 12.3,
    description: 'Highest verified check-ins in one hour',
  },
  dataCard: {
    headerTitle: 'Event Attendance Scatter Map',
    cardContent: <DailyVerificationScatterChart data={generateVerificationData(200, 5, 120, 'scatter')} />,
    dataDescription:
      'The scatter map highlights attendee check-in patterns across the arena. High-activity zones like main entrances and concessions are prominently visible. Areas with insufficient verifications are flagged.',
  },
  verificationSummary: VerificationSummaryData,
}
