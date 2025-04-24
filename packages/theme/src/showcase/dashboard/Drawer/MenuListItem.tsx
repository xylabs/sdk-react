import { LogoutRounded } from '@mui/icons-material'
import {
  ListItem, ListItemIcon, type ListItemProps, ListItemText,
  useTheme,
} from '@mui/material'
import React from 'react'

import { alphaCss } from '../../../alphaCss.ts'
import { StyledFlexRow, StyledListItemButton } from '../StyledListItemButton.tsx'

export interface MenuListItemProps extends ListItemProps {
  active?: boolean
  icon?: React.ReactNode
  mode?: 'full-width' | 'icon-only'
  onItemClick?: () => void
  text: string
}

const defaultIcon = <LogoutRounded />

export const MenuListItem: React.FC<MenuListItemProps> = ({
  icon = defaultIcon, text, onItemClick, mode = 'full-width', active, ...props
}) => {
  const theme = useTheme()

  return (
    <ListItem
      disablePadding
      sx={{ paddingBottom: 1 }}
      {...props}
    >
      <StyledListItemButton
        onClick={onItemClick}
        disableRipple
        disableTouchRipple
        active={active}
      >
        <StyledFlexRow>
          <ListItemIcon
            sx={{ color: alphaCss(theme.vars.palette.text.primary, 0.5), justifyContent: 'center' }}
          >
            {icon}
          </ListItemIcon>
          {mode === 'full-width' && (
            <ListItemText
              sx={{ color: alphaCss(theme.vars.palette.text.primary, 0.5) }}
              primary={text}
            />
          )}
        </StyledFlexRow>
      </StyledListItemButton>
    </ListItem>
  )
}
