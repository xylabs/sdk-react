import { Link } from '@mui/material'
import React, { forwardRef } from 'react'

import { LinkExProps } from './LinkExProps.tsx'
import { LinkToEx } from './LinkToEx.tsx'

export const LinkEx = forwardRef<HTMLAnchorElement, LinkExProps>(({ to, ...props }, ref) => {
  return to ? <LinkToEx ref={ref} to={to} {...props} /> : <Link ref={ref} {...props} />
})

LinkEx.displayName = 'LinkExXYLabs'
