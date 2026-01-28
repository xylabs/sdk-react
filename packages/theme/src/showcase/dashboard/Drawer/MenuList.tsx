import {
  List, ListItem, ListItemIcon, ListItemText, type ListProps,
  useTheme,
} from '@mui/material'
import { isDefined } from '@xylabs/sdk-js'
import React, { useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { alphaCss } from '../../../alphaCss.ts'
import type { MenuNavItem } from '../MenuNavItem.ts'
import {
  StyledFlexRow, StyledListItemButton, StyledMenuIconWrapSpan,
} from '../StyledListItemButton.tsx'

export interface BaseMenuListProps extends ListProps {
  menuItems?: MenuNavItem[]
}

export const BaseMenuList: React.FC<BaseMenuListProps> = (props) => {
  const {
    menuItems, sx, ...listProps
  } = props

  const theme = useTheme()
  const activeColor = theme.vars.palette.primary.light

  const { pathname } = useLocation()

  const pathMatch = useCallback((path: string, matchType: MenuNavItem['matchType']) => {
    if (matchType === 'exact') {
      return pathname === path || pathname === `${path}/`
    }
    return pathname.startsWith(path)
  }, [pathname])

  return (
    <List
      sx={{
        p: 0, overflow: 'auto', ...sx,
      }}
      {...listProps}
    >
      {menuItems?.map(({
        svgIcon: icon, primaryText, path, matchType,
      }) => (
        <ListItem
          key={primaryText}
          disablePadding
          sx={{ paddingBottom: 1 }}
        >
          <StyledListItemButton
            active={pathMatch(path, matchType)}
            disableRipple
            disableTouchRipple
          >
            <StyledFlexRow>
              <ListItemIcon
                sx={{ color: pathMatch(path, matchType) ? activeColor : alphaCss(theme.vars.palette.text.primary, 0.5), justifyContent: 'center' }}
              >
                <StyledMenuIconWrapSpan
                  ref={(ref: HTMLSpanElement) => {
                    if (isDefined(ref)) {
                      ref.innerHTML = icon ?? ''
                    }
                  }}
                />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    fontWeight: pathMatch(path, matchType) ? 'bold' : 'inherit',
                    color: pathMatch(path, matchType) ? 'inherit' : alphaCss(theme.vars.palette.text.primary, 0.5),
                  },
                }}
                primary={primaryText}
              />
            </StyledFlexRow>
          </StyledListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
