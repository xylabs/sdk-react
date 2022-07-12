import { BusyCircularProgressProps, BusyLinearProgressProps } from './components'

export type MaterialUIThemeColor = 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
export type BusyVariant = 'circular' | 'linear'

export interface BusyProps {
  busy?: boolean
  busyOpacity?: string | number
  busyColor?: MaterialUIThemeColor
  busyVariant?: BusyVariant
  busyCircularProps?: BusyCircularProgressProps
  busyLinearProps?: BusyLinearProgressProps
  busySize?: number
}
