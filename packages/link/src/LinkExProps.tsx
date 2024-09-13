import type { LinkProps } from '@mui/material'
import type { NavigateOptions, To } from 'react-router-dom'

export interface LinkExProps extends Omit<LinkProps, 'ref'> {
  disableUserEvents?: boolean
  funnel?: string
  placement?: string
  to?: To
  toOptions?: NavigateOptions
}
