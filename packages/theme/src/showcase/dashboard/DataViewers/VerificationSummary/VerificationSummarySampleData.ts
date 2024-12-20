import type { VerificationSummaryProps } from './VerificationSummaryProps.tsx'

export const VerificationSummarySampleData: VerificationSummaryProps = {
  accuracyPercentage: 97.2,
  comparisonText: "Compared to last month's checks",
  comparisonValue: 4.1,
  currentLocation: 'Burlingame, CA',
  locationCheckCount: 435,
  monthlyChange: 8.9,
  monthlyVerificationCount: 1842,
  regions: [
    {
      name: 'Daly City', time: '10:30 AM', verified: true,
    },
    {
      name: 'Millbrae', time: '11:15 AM', verified: false,
    },
    {
      name: 'Burlingame', time: '1:45 PM', verified: true,
    },
    {
      name: 'San Mateo', time: '2:30 PM', verified: true,
    },
    {
      name: 'Redwood City', time: '4:00 PM', verified: false,
    },
  ],
  status: 'updating location accuracy...',
  title: 'Order Progress',
  yearlyChange: 5.3,
  yearlyVerificationCount: 8407,
  finalConfirmation: true,
  locationHeader: 'Location',
  timeHeader: 'Time',
  statusHeader: 'Status',
}
