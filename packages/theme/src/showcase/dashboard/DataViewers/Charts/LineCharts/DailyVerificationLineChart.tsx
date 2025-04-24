// DailyVerificationLineChart.tsx

import { useTheme } from '@mui/material'
import React from 'react'
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from 'recharts'

import { CustomDataTooltip, type DailyVerificationChartProps } from '../Shared/index.ts'

export const DailyVerificationLineChart: React.FC<DailyVerificationChartProps> = ({ data }) => {
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
          dataKey="verifications"
          stackId="1"
          stroke={theme.vars.palette.primary.main}
          fill={theme.vars.palette.primary.light}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
