import type { ToolbarProps } from '@mui/material'
import { Toolbar } from '@mui/material'
import { ColorSchemeButton } from '@xylabs/react-theme'
import { isDefinedNotNull } from '@xylabs/sdk-js'
import type { ReactNode } from 'react'
import React from 'react'

import type { SiteMenuProps } from '../../SiteMenu/index.ts'
import { SiteMenu } from '../../SiteMenu/index.ts'

export interface SystemToolbarProps extends ToolbarProps {
  darkModeButton?: boolean
  developerMode?: boolean
  menuItems?: ReactNode
  onMenuToggle?: SiteMenuProps['onMenuToggle']
  precedingChildren?: ReactNode
}

export const SystemToolbar: React.FC<SystemToolbarProps> = ({
  children,
  darkModeButton = false,
  menuItems,
  onMenuToggle,
  precedingChildren,
  ...props
}) => {
  return (
    <Toolbar {...props}>
      {precedingChildren}
      {children}
      {darkModeButton
        ? <ColorSchemeButton />
        : null}
      {isDefinedNotNull(menuItems)
        ? <SiteMenu onMenuToggle={onMenuToggle}>{menuItems}</SiteMenu>
        : null}
    </Toolbar>
  )
}
