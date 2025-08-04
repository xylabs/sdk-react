import type { MenuProps, PaletteMode } from '@mui/material'
import { Menu, useTheme } from '@mui/material'
import { isString } from '@xylabs/typeof'
import React from 'react'

export interface MenuExProps extends MenuProps {
  colorize?: 'primary' | 'secondary'
  mode?: PaletteMode
}

export const MenuEx: React.FC<MenuExProps> = ({
  MenuListProps, mode = 'light', colorize, ...props
}) => {
  const theme = useTheme()
  const colorizeMenuListProps = isString(colorize) ? { sx: { backgroundColor: theme.palette[colorize][mode] } } : {}
  return (
    <Menu
      MenuListProps={{ ...MenuListProps, ...colorizeMenuListProps }}
      {...props}
    />
  )
}
