import {
  Box, Typography, useTheme,
} from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import { isDefined } from '@xylabs/typeof'
import React, { useState } from 'react'
import {
  Cell, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts'

import { alphaCss } from '../../../../../alphaCss.ts'
import type { PieChartProps } from '../Shared/index.ts'
import { CustomDataTooltip } from '../Shared/index.ts'

export const StyledDualRingPieChart: React.FC<PieChartProps> = ({
  data01, data02, showLegend = false,
}) => {
  const theme = useTheme()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  const colors = [
    alphaCss(theme.vars.palette.primary.main, 0.8),
    alphaCss(theme.vars.palette.secondary.main, 0.8),
    alphaCss(theme.vars.palette.error.main, 0.8),
    alphaCss(theme.vars.palette.warning.main, 0.8),
    alphaCss(theme.vars.palette.success.main, 0.8),
  ]

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {showLegend && (
        <Box display="flex" flexDirection="column" mb={2}>
          {data01.map((entry, index) => (
            <FlexRow key={index} gap={1} alignItems="center">
              <Box
                sx={{
                  backgroundColor: colors[index % colors.length],
                  borderRadius: 1,
                  height: '20px',
                  width: '20px',
                }}
              />
              <Typography variant="body2">{entry.name}</Typography>
            </FlexRow>
          ))}
        </Box>
      )}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Tooltip
            content={(
              <CustomDataTooltip
                tooltipData={[
                  { label: 'Name', dataKey: 'name' },
                  { label: 'Value', dataKey: 'value' },
                ]}
              />
            )}
          />
          {/* Inner Ring */}
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            label={({ value }) => `${value}`}
            labelLine={false}
            paddingAngle={5}
            cornerRadius={3}
            stroke="none"
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </Pie>
          {/* Outer Ring */}
          {isDefined(data02) && (
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={100}
              startAngle={10}
              endAngle={-350}
              label={({ value }) => `${value}`}
              labelLine={false}
              paddingAngle={5}
              cornerRadius={3}
              stroke="none"
            >
              {data02.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </Pie>
          )}
        </PieChart>
      </ResponsiveContainer>
    </Box>
  )
}
