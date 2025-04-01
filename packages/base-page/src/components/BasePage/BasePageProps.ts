import type { BoxProps } from '@mui/material'
import type { AppBarExProps } from '@xylabs/react-appbar'
import type { ReactElement, ReactNode } from 'react'

export interface MetaServerPageSettings {
  pageCompleteMetaName?: string
  shareImage?: string
  title?: string
}

export interface BasePageProps extends BoxProps {
  appBar?: ReactElement<AppBarExProps>
  appFooter?: ReactElement
  beta?: boolean
  container?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  cookieConsent?: ReactNode
  description?: string
  disableGutters?: boolean
  hideAppBar?: boolean
  hideFooter?: boolean
  metaServer?: MetaServerPageSettings
  noindex?: boolean
  scrollToTopButton?: boolean
  title?: string
}
