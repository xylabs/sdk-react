import { PaletteMode, Select, SelectProps, useTheme } from '@mui/material'
import merge from 'lodash/merge'

export interface SelectExProps<T> extends SelectProps<T> {
  colorize?: 'primary' | 'secondary'
  mode?: PaletteMode
}

export const SelectEx: <T>(props: SelectExProps<T>) => JSX.Element = ({ MenuProps, mode = 'light', colorize, ...props }) => {
  const theme = useTheme()
  const colorizeMenuProps = colorize ? { MenuListProps: { sx: { backgroundColor: theme.palette[colorize][mode] } } } : {}

  return <Select MenuProps={merge(MenuProps, colorizeMenuProps)} {...props} />
}
