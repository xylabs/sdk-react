import {
  Box, Grid2, Typography,
} from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import type { DataCardProps } from '../DataViewers/index.ts'
import { DataCard } from '../DataViewers/index.ts'
import type { VerificationSummaryProps } from '../DataViewers/VerificationSummary/index.ts'
import { VerificationSummary } from '../DataViewers/VerificationSummary/index.ts'
import type { StatCardProps } from '../StandardComponents/index.ts'
import {
  DropdownSelect, DropdownSelectCategories, StatCard,
} from '../StandardComponents/index.ts'

export interface Dashboard1DataProps {
  dataCard: DataCardProps
  statCard1: StatCardProps
  statCard2: StatCardProps
  statCard3: StatCardProps
  statCard4: StatCardProps
  statCard5: StatCardProps
  statCard6: StatCardProps
  verificationSummary: VerificationSummaryProps
}

export interface Dashboard1Props {
  dataMapping: Dashboard1DataProps
  depin: Dashboard1DataProps
  employeeTracking: Dashboard1DataProps
  eventAttendance: Dashboard1DataProps
  gamefi: Dashboard1DataProps
  mobileApp: Dashboard1DataProps
  partnerValidation: Dashboard1DataProps
  rewardPrograms: Dashboard1DataProps
  supplyChain: Dashboard1DataProps
}

export const SampleDashboard1: React.FC<Dashboard1Props> = ({
  dataMapping,
  depin,
  employeeTracking,
  eventAttendance,
  gamefi,
  mobileApp,
  partnerValidation,
  rewardPrograms,
  supplyChain,
}) => {
  const [category, setCategory] = React.useState<keyof Dashboard1Props>('employeeTracking')

  // Map the categories to the data object
  const dataMappingObject: Dashboard1Props = {
    dataMapping,
    depin,
    employeeTracking,
    eventAttendance,
    gamefi,
    mobileApp,
    partnerValidation,
    rewardPrograms,
    supplyChain,
  }

  // Get the data for the currently selected category
  const currentData = dataMappingObject[category]

  // Log the values for debugging
  console.log('Selected Category:', category)
  console.log('Current Data:', currentData)

  const handleCategoryChange = (value: string) => {
    console.log('Dropdown selected value:', value)
    setCategory(value as keyof Dashboard1Props)
  }

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12 }}>
        <FlexRow justifyContent="space-between" flexWrap="wrap">
          <Typography variant="h3">Dashboard</Typography>
          <Box width="fit-content">
            <DropdownSelect
              items={DropdownSelectCategories}
              onChange={handleCategoryChange}
              selectedValue={category}
            />
          </Box>
        </FlexRow>
      </Grid2>
      <Grid2 size={{
        xs: 12, md: 4, sm: 6,
      }}
      >
        <StatCard {...currentData.statCard1} />
      </Grid2>
      <Grid2 size={{
        xs: 12, md: 4, sm: 6,
      }}
      >
        <StatCard {...currentData.statCard2} />
      </Grid2>
      <Grid2 size={{
        xs: 12, md: 4, sm: 6,
      }}
      >
        <StatCard {...currentData.statCard3} />
      </Grid2>
      <Grid2 size={{
        xs: 12, md: 4, sm: 6,
      }}
      >
        <StatCard {...currentData.statCard4} />
      </Grid2>
      <Grid2 size={{
        xs: 12, md: 4, sm: 6,
      }}
      >
        <StatCard {...currentData.statCard5} />
      </Grid2>
      <Grid2 size={{
        xs: 12, md: 4, sm: 6,
      }}
      >
        <StatCard {...currentData.statCard6} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <VerificationSummary {...currentData.verificationSummary} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <DataCard {...currentData.dataCard} />
      </Grid2>
    </Grid2>
  )
}
