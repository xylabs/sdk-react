import type { ButtonProps } from '@mui/material'
import type { BoxlikeComponentProps, BusyProps } from '@xylabs/react-shared'
import type { NavigateOptions, To } from 'react-router-dom'

export interface ButtonBaseExProps extends Omit<ButtonProps, 'ref' | 'href'>, BoxlikeComponentProps, BusyProps {
  disableUserEvents?: boolean
  funnel?: string
  intent?: string
  placement?: string
  target?: string
}

export interface ButtonToExProps extends ButtonBaseExProps {
  href?: never
  to: To
  toOptions?: NavigateOptions
}

export interface ButtonHrefExProps extends ButtonBaseExProps {
  href: string
  to?: never
  toOptions?: never
}

export interface ButtonClickExProps extends ButtonBaseExProps {
  href?: never
  to?: never
  toOptions?: never
}

export type ButtonExProps = ButtonToExProps | ButtonHrefExProps | ButtonClickExProps
