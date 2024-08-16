import type { AppBarProps, ToolbarProps } from '@mui/material'
import type { ReactElement } from 'react'

interface AppBarExProps extends AppBarProps {
  container?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  contextToolbar?: ReactElement<ToolbarProps>
  menu?: ReactElement<ToolbarProps>
  responsive?: boolean
  systemToolbar?: ReactElement<ToolbarProps>
}

export type { AppBarExProps }
