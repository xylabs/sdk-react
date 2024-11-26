import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'
import {
  Divider,
  IconButton, List,
} from '@mui/material'
import { FlexGrowCol } from '@xylabs/react-flexbox'
import type { ReactNode } from 'react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { BottomMenuArea } from './BottomMenuArea.tsx'
import { MenuListItem } from './MenuListItem.tsx'
import { DrawerHeader, StyledDrawer } from './Styling.tsx'

export interface DrawerMenuItem {
  icon: ReactNode
  label: string
  path: string
}

export interface MiniDrawerProps {
  menuItems: DrawerMenuItem[]
  open: boolean
  openHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export const MiniDrawer: React.FC<MiniDrawerProps> = ({
  menuItems, open, openHandler,
}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const toggleDrawer = () => {
    openHandler(!open)
  }

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftRounded /> : <ChevronRightRounded />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map(item => (
          <MenuListItem
            key={item.path}
            mode={open ? 'full-width' : 'icon-only'}
            text={item.label}
            icon={item.icon}
            active={pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </List>
      <FlexGrowCol />
      <Divider flexItem />
      <BottomMenuArea />
    </StyledDrawer>
  )
}
