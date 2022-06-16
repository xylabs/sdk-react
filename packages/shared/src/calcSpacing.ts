import { BoxProps, Theme } from '@mui/material'

export const calcSpacing = (theme: Theme, values: BoxProps['margin'][]) => {
  for (let i = 0; i < values.length; i++) {
    const value = values[i]
    if (value !== undefined) {
      if (typeof value === 'string') {
        return value
      } else if (typeof value === 'number') {
        return theme.spacing(value)
      }
    }
  }
}
