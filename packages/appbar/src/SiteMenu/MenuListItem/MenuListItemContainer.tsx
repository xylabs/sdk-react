import type { ListItemProps } from '@mui/material'
import { ListItemText, useTheme } from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import { LinkEx } from '@xylabs/react-link'
import { useCollapsible } from '@xylabs/react-shared'
import React, { useState } from 'react'

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
        <LinkEx
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          color="inherit"
          to={to}
          sx={{
            '& :hover': {
              cursor: 'pointer',
              textDecoration: 'underline',
            },
          }}
        >
          <FlexRow>
            <MenuIcon icon={icon} paddingRight={resolvedIconMenuTextSpacing} color={hovered ? 'secondary' : 'inherit'} />
            <ListItemText primary={primary} />
          </FlexRow>
        </LinkEx>
        <FlexRow style={{ marginLeft: theme.spacing(1) }}>
          {subNavListItems
            ? <SubNavToggleIconButton setOpenSubNav={setOpenSubNav} openSubNav={openSubNav} />
            : null}
          {tooltip
            ? <ListItemTooltip title={tooltip} />
            : null}
        </FlexRow>
      </MenuListItem>
      {subNavListItems
        ? (
            <SubNavListItemsCollapse openSubNav={openSubNav} collapse={collapse}>
              {subNavListItems?.map((item, index) => <MenuListItemContainer dense={dense} sx={{ pl: theme.spacing(1) }} key={index} {...item} />)}
            </SubNavListItemsCollapse>
          )
        : null}
    </>
  )
}
