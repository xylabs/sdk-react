import { Menu, MenuProps, PaletteMode, useTheme } from '@mui/material'
import { merge } from '@xylabs/lodash'

export interface MenuExProps extends MenuProps {
  colorize?: 'primary' | 'secondary'
  mode?: PaletteMode
}

export const MenuEx: React.FC<MenuExProps> = ({ MenuListProps = {}, mode = 'light', colorize, ...props }) => {
  const theme = useTheme()
  const colorizeMenuListProps = colorize ? { sx: { backgroundColor: theme.palette[colorize][mode] } } : {}
  return <Menu MenuListProps={merge(MenuListProps, colorizeMenuListProps)} {...props} />
}
