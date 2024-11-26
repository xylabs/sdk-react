import {
  alpha,
  darken,
  lighten,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'
import {
  CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis,
} from 'recharts'

import type { DailyVerificationChartProps } from '../Shared/index.ts'
import { CustomDataTooltip } from '../Shared/index.ts'

const getVerificationColor = (verifications: number): string => {
  if (verifications >= 30) return '#006EF5'
  if (verifications < 5) return alpha('#EF233C', 5 / verifications / 2)
  return alpha('#006EF5', verifications / 30 / 3)
}

export const DailyVerificationScatterChart: React.FC<DailyVerificationChartProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const theme = useTheme()

  const handleReferenceLineMouseMove = (event: React.MouseEvent<SVGLineElement>) => {
    setTooltipPos({ x: event.clientX - 60, y: event.clientY - 80 }) // Adjust as needed
    setIsHovered(true)
  }

  const handleReferenceLineMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      {isHovered && (
        <CustomDataTooltip
          sx={{
            position: 'absolute',
            top: tooltipPos.y,
            left: tooltipPos.x,
            p: 1,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: 1,
            zIndex: 10,
            pointerEvents: 'none',
          }}
          tooltipData={[
            { label: 'Threshold', dataKey: '30 Verifications' },
          ]}
        />
      )}
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid vertical={false} stroke={lighten(theme.palette.background.paper, 0.2)} />
          <XAxis
            type="number"
            dataKey="time"
            name="Time of Day"
            unit=":00"
            domain={[8, 17]}
            tickCount={10}
            tickLine={true}
            tick={{ fontSize: theme.typography.body2.fontSize }}
          />
          <YAxis
            width={20}
            type="number"
            dataKey="verifications"
            name="Verifications"
            tickLine={true}
            tick={{ fontSize: theme.typography.body2.fontSize }}
            orientation="right"
            axisLine={false}
          />
          <Tooltip
            content={(
              <CustomDataTooltip
                tooltipData={[
                  { label: 'Time', dataKey: 'time' },
                  { label: 'Verifications', dataKey: 'verifications' },
                ]}
              />
            )}
            cursor={{ strokeDasharray: '3 3' }}
          />
          {/* Actual threshold line */}
          <ReferenceLine
            y={30}
            stroke={isHovered ? darken('#006EF5', 0.3) : alpha('#006EF5', 0.7)}
            strokeWidth={isHovered ? 2 : 1}
          />
          {/* Invisible hit area for threshold line hover */}
          <ReferenceLine
            y={30}
            stroke="transparent"
            strokeWidth={10}
            onMouseMove={handleReferenceLineMouseMove}
            onMouseLeave={handleReferenceLineMouseLeave}
          />
          <Scatter
            name="Verification Scatter"
            data={data}
            shape="circle"
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getVerificationColor(entry.verifications)} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}
