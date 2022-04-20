import { Link, LinkProps } from '@mui/material'
import React from 'react'
import { Link as RouterLink, To } from 'react-router-dom'

export interface LinkExProps extends LinkProps {
  to?: To
}

export const LinkEx: React.FC<LinkExProps> = ({ to, ...props }) => {
  if (to) {
    return <Link rel="noopener noreferrer" component={RouterLink} to={to} {...props} />
  } else {
    return <Link {...props} />
  }
}

/** @deprecated use LinkEx instead */
export const LinkToEx = LinkEx
