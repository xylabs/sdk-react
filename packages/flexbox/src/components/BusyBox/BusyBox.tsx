import { Box, BoxProps, Paper, useTheme } from '@mui/material'
import { BoxTypeMap } from '@mui/system'
import { BusyCircularProgress, BusyLinearProgress, BusyProps } from '@xylabs/react-shared'
import { forwardRef } from 'react'

import { useBusyTiming } from '../../hooks'

export interface BusyBoxProps extends BusyProps, Omit<BoxProps<BoxTypeMap['defaultComponent']>, 'ref'> {
  background?: boolean
  paper?: boolean
}

const BusyBox = forwardRef<unknown, BusyBoxProps>(
  (
    {
      background,
      children,
      component,
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
    ref,
  ) => {
    const theme = useTheme()
    const internalBusy = useBusyTiming(busy, busyMinimum)

    return (
      <Box
        component={paper ? Paper : component}
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
        ref={ref}
        {...props}
      >
        {children}
        {internalBusy && busyVariant === 'linear' ? <BusyLinearProgress color={busyColor} opacity={busyOpacity} {...busyLinearProps} /> : null}
        {internalBusy && busyVariant === 'circular' ? (
          <BusyCircularProgress color={busyColor} opacity={busyOpacity} size={busySize} {...busyCircularProps} />
        ) : null}
      </Box>
    )
  },
)

BusyBox.displayName = 'BusyBoxXYLabs'

export { BusyBox }
