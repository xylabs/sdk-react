import type { LinkProps } from '@mui/material'
import type { NavigateOptions, To } from 'react-router-dom'

export interface LinkExProps extends Omit<LinkProps, 'ref'> {
  disableMixpanel?: boolean
  disableUserEvents?: boolean
  eventName?: string
  funnel?: string
  placement?: string
  to?: To
  toOptions?: NavigateOptions
}
