import { Link } from '@mui/material'
import { forwardRef } from 'react'

import { LinkExProps } from './LinkExProps.jsx'
import { LinkToEx } from './LinkToEx.jsx'

export const LinkEx = forwardRef<HTMLAnchorElement, LinkExProps>(({ to, ...props }, ref) => {
  return to ? <LinkToEx ref={ref} to={to} {...props} /> : <Link ref={ref} {...props} />
})

LinkEx.displayName = 'LinkExXYLabs'
