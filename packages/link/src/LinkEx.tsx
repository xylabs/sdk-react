import { Link, LinkProps } from '@mui/material'
import { forwardRef } from 'react'
import { Link as RouterLink, To } from 'react-router-dom'

export interface LinkExProps extends Omit<LinkProps, 'ref'> {
  to?: To
}

export const LinkEx = forwardRef<HTMLAnchorElement, LinkExProps>(({ to, ...props }, ref) => {
  if (to) {
    return <Link ref={ref} rel="noopener noreferrer" component={RouterLink} to={to} {...props} />
  } else {
    return <Link ref={ref} {...props} />
  }
})

LinkEx.displayName = 'LinkExXYLabs'

/** @deprecated use LinkEx instead */
export const LinkToEx = LinkEx
