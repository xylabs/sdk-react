import { BusyCircularProgressProps, BusyLinearProgressProps } from './components/index.ts'

export type MaterialUIThemeColor = 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
export type BusyVariant = 'circular' | 'linear'

export interface BusyProps {
  busy?: boolean
  busyCircularProps?: BusyCircularProgressProps
  busyColor?: MaterialUIThemeColor
  busyLinearProps?: BusyLinearProgressProps

  /** minimum duration in milliseconds for busy to appear */
  busyMinimum?: number

  busyOpacity?: string | number
  busySize?: number
  busyVariant?: BusyVariant
}
