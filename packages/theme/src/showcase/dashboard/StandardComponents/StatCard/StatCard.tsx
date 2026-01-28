import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material'
import {
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { isDefined } from '@xylabs/sdk-js'
import React from 'react'

import type { DataCardProps } from '../DataCard/index.ts'
import { DataCard } from '../DataCard/index.ts'

export interface StatCardProps extends DataCardProps {
  change: number
  customUnit?: string
  description?: string
  reverseDirectionality?: boolean
  value: number
}

const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}m`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`
  }
  return num.toString()
}

export const StatCard: React.FC<StatCardProps> = ({
  headerTitle, value, change, description, customUnit, reverseDirectionality = false, ...props
}) => {
  const theme = useTheme()

  const isPositive = change >= 0
  const changeColor = isPositive && !reverseDirectionality
    ? theme.vars.palette.success.main
    : isPositive && reverseDirectionality
      ? theme.vars.palette.error.main
      : theme.vars.palette.success.main
  const formattedValue = formatNumber(value)
  const showTooltip = formattedValue !== value.toString()

  return (
    <DataCard
      headerTitle={headerTitle}
      {...props}
      cardContent={(
        <FlexCol alignItems="flex-start">
          <FlexRow gap={0.5} paddingBottom={1} justifyContent="flex-start">
            {showTooltip
              ? (
                  <Tooltip title={value.toLocaleString()} arrow>
                    <Typography variant="h5" fontWeight="bold">
                      {formattedValue}
                      {' '}
                      {customUnit}
                    </Typography>
                  </Tooltip>
                )
              : (
                  <Typography variant="h4" fontWeight="bold">
                    {formattedValue}
                    {' '}
                    {customUnit}
                  </Typography>
                )}
            <FlexRow alignItems="center">
              {isPositive
                ? (
                    <ArrowUpwardRounded sx={{ color: changeColor, fontSize: theme.typography.body2.fontSize }} />
                  )
                : (
                    <ArrowDownwardRounded sx={{ color: changeColor, fontSize: theme.typography.body2.fontSize }} />
                  )}
              <Typography variant="body2" sx={{ color: changeColor }}>
                {Math.abs(change)}
                %
              </Typography>
            </FlexRow>
          </FlexRow>
          {isDefined(description) && (
            <Typography variant="body2" sx={{ color: changeColor }}>
              {description}
            </Typography>
          )}
        </FlexCol>
      )}
    />
  )
}
