import type { LinkProps } from '@mui/material'
import type { NavigateOptions, To } from 'react-router-dom'

export interface LinkOnlyHrefProps {
  href?: string
  to?: never
  toOptions?: never
}

export interface LinkOnlyToProps {
  href?: never
  to?: To
  toOptions?: NavigateOptions
}

export interface LinkNoToOrHrefProps {
  href?: never
  to?: never
  toOptions?: never
}

export type LinkHrefOrToOrNoProps = LinkOnlyHrefProps | LinkOnlyToProps | LinkNoToOrHrefProps

export interface LinkHrefAndToProps {
  href?: string
  to?: To
  toOptions?: NavigateOptions
}

export const asLinkHrefOrToProps = (props: LinkHrefAndToProps): LinkHrefOrToOrNoProps => {
  if (props.href && (props.to || props.toOptions)) {
    throw new Error('LinkExProps: cannot have both href and to')
  }
  return props.href ? { href: props.href } : props.to ? { to: props.to, toOptions: props.toOptions } : {}
}

export interface LinkExBaseProps extends Omit<LinkProps, 'ref' | 'href'> {
  disableUserEvents?: boolean
  funnel?: string
  intent?: string
  placement?: string
}

export type LinkExProps = LinkExBaseProps & LinkHrefOrToOrNoProps
