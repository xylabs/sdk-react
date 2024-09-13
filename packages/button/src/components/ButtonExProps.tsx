import type { ButtonProps } from '@mui/material'
import type { BoxlikeComponentProps, BusyProps } from '@xylabs/react-shared'
import type { NavigateOptions, To } from 'react-router-dom'

interface ButtonExProps extends Omit<ButtonProps, 'ref'>, BoxlikeComponentProps, BusyProps {
  disableUserEvents?: boolean
  funnel?: string
  intent?: string
  placement?: string
  target?: string
  to?: To
  toOptions?: NavigateOptions
}

export type { ButtonExProps }
