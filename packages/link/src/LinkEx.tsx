import { Link } from '@mui/material'
import { forwardRef } from 'react'

import { LinkExProps } from './LinkExProps'
import { LinkToEx } from './LinkToEx'

export const LinkEx = forwardRef<HTMLAnchorElement, LinkExProps>(({ to, ...props }, ref) => {
  return to ? <LinkToEx ref={ref} to={to} {...props} /> : <Link ref={ref} {...props} />
})

LinkEx.displayName = 'LinkExXYLabs'
