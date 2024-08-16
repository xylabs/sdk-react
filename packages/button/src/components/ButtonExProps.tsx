import type { ButtonProps } from '@mui/material'
import type { BoxlikeComponentProps, BusyProps } from '@xylabs/react-shared'
import type { NavigateOptions, To } from 'react-router-dom'

interface ButtonExProps extends Omit<ButtonProps, 'ref'>, BoxlikeComponentProps, BusyProps {
  target?: string
  to?: To
  toOptions?: NavigateOptions
}

export type { ButtonExProps }
