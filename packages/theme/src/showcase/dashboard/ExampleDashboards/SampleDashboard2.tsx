import {
  Box, Grid2, Typography,
} from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import type { PieChartProps } from '../DataViewers/index.ts'
import { DataCard, StyledDualRingPieChart } from '../DataViewers/index.ts'
import type { StatCardProps } from '../StandardComponents/index.ts'
import {
  DropdownSelect, DropdownSelectCategories, StatCard,
} from '../StandardComponents/index.ts'

export interface Dashboard2DataProps {
  pieChart: PieChartProps
  statCard1: StatCardProps
  statCard2: StatCardProps
  statCard3: StatCardProps
  statCard4: StatCardProps
}

export interface Dashboard2Props {
  dataMapping: Dashboard2DataProps
  depin: Dashboard2DataProps
  employeeTracking: Dashboard2DataProps
  eventAttendance: Dashboard2DataProps
  gamefi: Dashboard2DataProps
  mobileApp: Dashboard2DataProps
  partnerValidation: Dashboard2DataProps
  rewardPrograms: Dashboard2DataProps
  supplyChain: Dashboard2DataProps
}

export const SampleDashboard2: React.FC<Dashboard2Props> = ({
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
  const [category, setCategory] = React.useState<keyof Dashboard2Props>('employeeTracking')

  // Map the categories to the data object
  const dataMappingObject: Dashboard2Props = {
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

  const currentData = dataMappingObject[category]

  const handleCategoryChange = (value: string) => {
    console.log('Dropdown selected value:', value)
    setCategory(value as keyof Dashboard2Props)
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
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <StatCard {...currentData.statCard1} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <StatCard {...currentData.statCard2} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <StatCard {...currentData.statCard3} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <StatCard {...currentData.statCard4} />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <DataCard cardContent={<StyledDualRingPieChart {...currentData.pieChart} />}></DataCard>
      </Grid2>
    </Grid2>
  )
}
