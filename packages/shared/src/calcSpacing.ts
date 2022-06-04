import { Theme } from '@mui/material'

import { Margin } from './Margin'

const calcSpacing = (theme: Theme, values: Margin[]) => {
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

export { calcSpacing }
