import { ButtonProps } from '@mui/material'
import { BoxlikeComponentProps, BusyProps } from '@xylabs/react-shared'
import { NavigateOptions, To } from 'react-router-dom'

interface ButtonExProps extends ButtonProps, BoxlikeComponentProps, BusyProps {
  target?: string
  to?: To
  toOptions?: NavigateOptions
}

export type { ButtonExProps }
