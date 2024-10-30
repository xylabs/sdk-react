import type { ToolbarProps } from '@mui/material'
import { Toolbar } from '@mui/material'
import React from 'react'
import type { To } from 'react-router-dom'

import { LogoLinkEx } from './LogoLinkEx.tsx'

export interface ContextToolbarProps extends ToolbarProps {
  logo?: React.ReactNode
  logoTo?: To
  version?: boolean | string
}

export const ContextToolbar: React.FC<ContextToolbarProps> = ({
  children, logo, logoTo = '/', version = false, ...props
}) => {
  return (
    <Toolbar {...props}>
      <LogoLinkEx logo={logo} version={version} to={logoTo} />
      {children}
    </Toolbar>
  )
}
