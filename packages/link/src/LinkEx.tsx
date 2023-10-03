import { Link } from '@mui/material'
import { forwardRef } from 'react'

import { LinkExProps } from './LinkExProps'
import { LinkToEx } from './LinkToEx'

export const LinkEx = forwardRef<HTMLAnchorElement, LinkExProps>(({ to, ...props }, ref) => {
  if (to) {
    return <LinkToEx ref={ref} to={to} {...props} />
  } else {
    return <Link ref={ref} {...props} />
  }
})

LinkEx.displayName = 'LinkExXYLabs'
