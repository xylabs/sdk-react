import { Link } from '@mui/material'
import { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { LinkExProps } from './LinkExProps'

export const LinkToEx = forwardRef<HTMLAnchorElement, LinkExProps>((props, ref) => {
  return <Link ref={ref} rel="noopener noreferrer" component={RouterLink} {...props} />
})

LinkToEx.displayName = 'LinkToExXYLabs'
