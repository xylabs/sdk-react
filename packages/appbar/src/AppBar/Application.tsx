import type { ToolbarProps } from '@mui/material'
import type { ReactElement } from 'react'
import React from 'react'

import { AppBarEx } from '../AppBarEx.tsx'
import type { AppBarExProps } from '../AppBarExProps.tsx'
import { ContextToolbar, SystemToolbar } from '../Toolbar/index.ts'

export interface ApplicationAppBarProps extends AppBarExProps {
  contextToolbar?: ReactElement<ToolbarProps>
  logo?: React.ReactNode
  responsive?: boolean
  systemToolbar?: ReactElement<ToolbarProps>
}

export const ApplicationAppBar: React.FC<ApplicationAppBarProps> = ({
  logo, systemToolbar, contextToolbar, responsive = true, ...props
}) => {
  return (
    <AppBarEx
      systemToolbar={systemToolbar ?? <SystemToolbar />}
      contextToolbar={contextToolbar ?? <ContextToolbar logo={logo} />}
      position="sticky"
      responsive={responsive}
      {...props}
    />
  )
}
