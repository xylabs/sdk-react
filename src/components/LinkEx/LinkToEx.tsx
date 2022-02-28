import { Link, LinkProps } from '@mui/material'
import React from 'react'
import { Link as RouterLink, To } from 'react-router-dom'

interface Props extends LinkProps {
  to?: To
}

const LinkEx: React.FC<Props> = ({ to, ...props }) => {
  if (to) {
    return <Link component={RouterLink} to={to} {...props} />
  } else {
    return <Link {...props} />
  }
}

/** @deprecated use LinkEx instead */
const LinkToEx = LinkEx

// eslint-disable-next-line deprecation/deprecation
export { LinkEx, LinkToEx }
