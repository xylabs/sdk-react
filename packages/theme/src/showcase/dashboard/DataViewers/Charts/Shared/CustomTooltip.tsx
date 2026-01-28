// CustomDataTooltip.tsx

import type { CardProps } from '@mui/material'
import { Card, Typography } from '@mui/material'
import React from 'react'

interface TooltipLabel {
  dataKey: string
  label: string
}

interface CustomDataTooltipProps extends CardProps {
  active?: boolean
  payload?: { payload: Record<string, string> }[]
  tooltipData: TooltipLabel[]
}

export const CustomDataTooltip: React.FC<CustomDataTooltipProps> = ({
  active, payload, tooltipData,
}) => {
  if (!active || !payload || payload.length === 0) return null

  return (
    <Card variant="outlined" sx={{ p: 1 }}>
      {tooltipData.map(({ label, dataKey }) => {
        const value = payload[0].payload[dataKey] ?? 'N/A'
        return (
          <Typography key={dataKey} variant="body2">
            <strong>
              {label}
              :
            </strong>
            {' '}
            {value}
          </Typography>
        )
      })}
    </Card>
  )
}
