import type { ListItemProps } from '@mui/material'
import { ListItemText, useTheme } from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import { useCollapsible } from '@xylabs/react-shared'
import { isString } from '@xylabs/sdk-js'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import type { MenuListItemBase, NavListItemProps } from '../lib/index.ts'
import {
  ListItemTooltip, MenuIcon, MenuListItem,
} from './list-item-components/index.ts'
import { SubNavListItemsCollapse, SubNavToggleIconButton } from './sub-nav/index.ts'

export interface MenuListItemProps extends NavListItemProps, MenuListItemBase, ListItemProps {
  iconMenuTextSpacing?: string
  iconOnly?: boolean
  subNavListItems?: NavListItemProps[]
  subNavOpen?: boolean
}

export const MenuListItemContainer: React.FC<MenuListItemProps> = ({
  style,
  icon,
  iconMenuTextSpacing,
  iconOnly,
  onButtonClick,
  primary,
  subNavListItems,
  sx,
  tooltip,
  to,
  ...props
}) => {
  const { dense } = props
  const theme = useTheme()
  const { collapse } = useCollapsible()
  const [openSubNav, setOpenSubNav] = useState(false)
  const [hovered, setHovered] = useState(false)
  const resolvedIconMenuTextSpacing = iconMenuTextSpacing ?? theme.spacing(1)

  return (
    <>
      <MenuListItem
        disableGutters
        iconOnly={iconOnly}
        onClick={onButtonClick}
        dense={dense}
        sx={{ justifyContent: 'space-between', ...sx }}
        style={{ whiteSpace: 'nowrap', ...style }}
        {...props}
      >

        <NavLink
          className="site-menu-nav-link"
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.cursor = 'pointer'
            el.style.textDecoration = 'underline'
            el.style.filter = 'brightness(75%)'
            setHovered(true)
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.cursor = 'default'
            el.style.textDecoration = 'none'
            el.style.filter = ''
            setHovered(false)
          }}
          color="inherit"
          to={to ?? ''}
          viewTransition
          style={{
            color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center',
          }}
        >
          <MenuIcon icon={icon} paddingRight={resolvedIconMenuTextSpacing} color={hovered ? 'secondary' : 'inherit'} />
          <ListItemText primary={primary} />
        </NavLink>
        <FlexRow style={{ marginLeft: theme.spacing(1) }}>
          {subNavListItems
            ? <SubNavToggleIconButton setOpenSubNav={setOpenSubNav} openSubNav={openSubNav} />
            : null}
          {isString(tooltip)
            ? <ListItemTooltip title={tooltip} />
            : null}
        </FlexRow>
      </MenuListItem>
      {subNavListItems
        ? (
            <SubNavListItemsCollapse openSubNav={openSubNav} collapse={collapse}>
              {subNavListItems?.map(item =>
                <MenuListItemContainer dense={dense} sx={{ pl: theme.spacing(1) }} key={item.href ?? item.to?.toString()} {...item} />)}
            </SubNavListItemsCollapse>
          )
        : null}
    </>
  )
}
