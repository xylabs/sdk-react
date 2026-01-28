import type { MenuProps, PaletteMode } from '@mui/material'
import { Menu, useTheme } from '@mui/material'
import { isString } from '@xylabs/sdk-js'
import React from 'react'

export interface MenuExProps extends MenuProps {
  colorize?: 'primary' | 'secondary'
  mode?: PaletteMode
}

export const MenuEx: React.FC<MenuExProps> = ({
  MenuListProps, slotProps, mode = 'light', colorize, ...props
}) => {
  const menuListProps = MenuListProps || slotProps?.list || {}
  const theme = useTheme()
  const colorizeMenuListProps = isString(colorize) ? { sx: { backgroundColor: theme.palette[colorize][mode] } } : {}
  return (
    <Menu
      slotProps={{ list: { ...menuListProps, ...colorizeMenuListProps } }}
      {...props}
    />
  )
}
