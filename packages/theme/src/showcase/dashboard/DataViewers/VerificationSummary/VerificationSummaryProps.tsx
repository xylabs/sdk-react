import {
  Box,
  Typography,
} from '@mui/material'
import { FlexCol } from '@xylabs/react-flexbox'
import React from 'react'

import { DataCard } from '../../StandardComponents/index.ts'
import type { VerificationStep } from './VerificationList.tsx'
import { VerificationList } from './VerificationList.tsx'

export interface VerificationSummaryProps {
  accuracyPercentage: number
  comparisonText: string
  comparisonValue: number
  currentLocation: string
  finalConfirmation?: boolean
  locationCheckCount: number
  locationHeader: string
  monthlyChange: number
  monthlyVerificationCount: number
  regions: VerificationStep[]
  status: string
  statusHeader: string
  timeHeader: string
  title: string
  yearlyChange: number
  yearlyVerificationCount: number
}

export const VerificationSummary: React.FC<VerificationSummaryProps> = ({
  currentLocation,
  regions,
  title,
  finalConfirmation,
  locationHeader,
  timeHeader,
  statusHeader,
}) => {
  return (
    <DataCard
      headerTitle={title}
      cardContent={(
        <Box display="flex" justifyContent="space-between" flexDirection="column">
          <Typography variant="body2">
            Current Location:
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            {currentLocation}
          </Typography>

          <VerificationList
            regions={regions}
            locationHeader={locationHeader}
            timeHeader={timeHeader}
            statusHeader={statusHeader}
          />
          {finalConfirmation && (
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <FlexCol alignItems="flex-start" paddingTop={2}>
                <Typography variant="body2">
                  Customer Confirmation:
                </Typography>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Complete ✅
                </Typography>
                <Typography variant="body2">
                  Your order has reached the final destination.
                </Typography>
              </FlexCol>
            </Box>
          )}
        </Box>
      )}
    />
  )
}
