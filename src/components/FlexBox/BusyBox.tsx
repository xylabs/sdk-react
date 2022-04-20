import { Box, BoxProps, Paper, useTheme } from '@mui/material'

import { BusyProps } from '../../BusyProps'
import { WithChildren } from '../../WithChildren'
import { BusyCircularProgress } from '../BusyCircularProgress'
import { BusyLinearProgress } from '../BusyLinearProgress'

export interface BusyBoxProps extends BusyProps, WithChildren<BoxProps> {
  paper?: boolean
  background?: boolean
}

export const BusyBox: React.FC<BusyBoxProps> = ({
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
  paper,
  style,
  ...props
}) => {
  const theme = useTheme()
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
      {...props}
    >
      {children}
      {busy && busyVariant === 'linear' ? <BusyLinearProgress color={busyColor} opacity={busyOpacity} {...busyLinearProps} /> : null}
      {busy && busyVariant === 'circular' ? <BusyCircularProgress color={busyColor} opacity={busyOpacity} size={busySize} {...busyCircularProps} /> : null}
    </Box>
  )
}
