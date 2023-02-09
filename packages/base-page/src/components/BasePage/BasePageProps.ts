import { BoxProps } from '@mui/material'
import { AppBarExProps } from '@xylabs/react-appbar'
import { ReactElement, ReactNode } from 'react'

interface BasePageProps extends BoxProps {
  appBar?: ReactElement<AppBarExProps>
  appFooter?: ReactElement
  beta?: boolean
  container?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  cookieConsent?: ReactNode
  disableGutters?: boolean
  hideAppBar?: boolean
  hideFooter?: boolean
  noindex?: boolean
  scrollToTopButton?: boolean
  title?: string
}

export type { BasePageProps }
