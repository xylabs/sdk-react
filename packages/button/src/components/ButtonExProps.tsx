import type { ButtonProps } from '@mui/material'
import type { BoxlikeComponentProps, BusyProps } from '@xylabs/react-shared'
import { isDefined, isString } from '@xylabs/typeof'
import type { NavigateOptions, To } from 'react-router-dom'

export interface ButtonOnlyHrefProps {
  href?: string
  to?: never
  toOptions?: never
}

export interface ButtonOnlyToProps {
  href?: never
  to?: To
  toOptions?: NavigateOptions
}

export interface ButtonNoToOrHrefProps {
  href?: never
  to?: never
  toOptions?: never
}

export type ButtonHrefOrToOrNoProps = ButtonOnlyHrefProps | ButtonOnlyToProps | ButtonNoToOrHrefProps

export interface ButtonHrefAndToProps {
  href?: string
  to?: To
  toOptions?: NavigateOptions
}

export const asButtonHrefOrToProps = ({
  href, to, toOptions,
}: ButtonHrefAndToProps): ButtonHrefOrToOrNoProps => {
  if (isString(href) && (isDefined(to) || isDefined(toOptions))) {
    throw new Error('ButtonExProps: cannot have both href and to')
  }
  return isString(href) ? { href } : isDefined(to) ? { to, toOptions } : {}
}

export interface ButtonBaseExProps extends Omit<ButtonProps, 'href'>, BoxlikeComponentProps, BusyProps {
  disableUserEvents?: boolean
  funnel?: string
  intent?: string
  placement?: string
  target?: string
}

export type ButtonExProps = ButtonBaseExProps & ButtonHrefOrToOrNoProps
