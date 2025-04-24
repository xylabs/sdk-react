import { useTheme } from '@mui/material'
import React from 'react'
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from 'recharts'

import type { DailyVerificationStackedChartProps } from '../Shared/index.ts'
import { CustomDataTooltip } from '../Shared/index.ts'

export const DailyVerificationStackedAreaChart: React.FC<DailyVerificationStackedChartProps> = ({ data }) => {
  const theme = useTheme()

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke={theme.vars.palette.background.paper} />
        <XAxis dataKey="day" />
        <YAxis width={20} />
        <Tooltip
          content={(
            <CustomDataTooltip
              tooltipData={[
                { label: 'Day', dataKey: 'day' },
                { label: 'Verifications', dataKey: 'verifications' },
              ]}
            />
          )}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Area
          type="monotone"
          dataKey="mobile"
          stackId="1"
          stroke={theme.vars.palette.primary.main}
          fill={theme.vars.palette.primary.main}
        />
        <Area
          type="monotone"
          dataKey="web"
          stackId="1"
          stroke={theme.vars.palette.secondary.main}
          fill={theme.vars.palette.secondary.light}
        />
        <Area
          type="monotone"
          dataKey="email"
          stackId="1"
          stroke={theme.vars.palette.success.main}
          fill={theme.vars.palette.success.light}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
