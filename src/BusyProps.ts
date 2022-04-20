import { CircularProgressProps, LinearProgressProps } from '@mui/material'

export type MaterialUIThemeColor = 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
export type BusyVariant = 'circular' | 'linear'

export interface BusyProps {
  busy?: boolean
  busyOpacity?: string | number
  busyColor?: MaterialUIThemeColor
  busyVariant?: BusyVariant
  busyCircularProps?: CircularProgressProps
  busyLinearProps?: LinearProgressProps
  busySize?: number
}
