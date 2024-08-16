import type { BoxProps, Theme } from '@mui/material'

export const calcSpacing = (theme: Theme, values: BoxProps['margin'][]) => {
  for (const value of values) {
    if (value !== undefined) {
      if (typeof value === 'string') {
        return value
      } else if (typeof value === 'number') {
        return theme.spacing(value)
      }
    }
  }
}
