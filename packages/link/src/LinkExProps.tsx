import type { LinkProps } from '@mui/material'
import type { NavigateOptions, To } from 'react-router-dom'

export interface LinkExProps extends Omit<LinkProps, 'ref'> {
  to?: To
  toOptions?: NavigateOptions
}
