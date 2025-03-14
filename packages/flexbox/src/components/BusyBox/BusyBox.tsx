import type { BoxProps } from '@mui/material'
import {
  Box, Paper, useTheme,
} from '@mui/material'
import type { BusyProps } from '@xylabs/react-shared'
import { BusyCircularProgress, BusyLinearProgress } from '@xylabs/react-shared'
import React from 'react'

import { useBusyTiming } from '../../hooks/index.ts'

export interface BusyBoxProps extends BoxProps, BusyProps {
  background?: boolean
  paper?: boolean
}

const BusyBox: React.FC<BusyBoxProps> = (
  {
    background,
    children,
    busyVariant = 'circular',
    busySize,
    busyOpacity = 0.85,
    busyColor,
    busy,
    busyCircularProps,
    busyLinearProps,
    busyMinimum = 0,
    paper,
    style,
    ...props
  },
) => {
  const theme = useTheme()
  const internalBusy = useBusyTiming(busy, busyMinimum)

  return (
    <Box
      component={paper ? Paper : 'div'}
      position="relative"
      style={
        background
          ? {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              ...style,
            }
          : style
      }
      {...props}
    >
      {children}
      {internalBusy && busyVariant === 'linear'
        ? <BusyLinearProgress color={busyColor} opacity={busyOpacity} {...busyLinearProps} />
        : null}
      {internalBusy && busyVariant === 'circular'
        ? <BusyCircularProgress color={busyColor} opacity={busyOpacity} size={busySize} {...busyCircularProps} />
        : null}
    </Box>
  )
}

BusyBox.displayName = 'BusyBoxXYLabs'

export { BusyBox }
