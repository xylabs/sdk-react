import type { BoxProps } from '@mui/material'
import type { AppBarExProps } from '@xylabs/react-appbar'
import type { ReactElement, ReactNode } from 'react'

/**
 * Represents the settings for a meta server page.
 *
 * @property pageCompleteMetaName - Optional. The meta name indicating the page is complete.
 * @property shareImage - Optional. The URL of the image to be used for sharing purposes.
 * @property shareMode - Optional. Specifies the sharing mode. Can be one of the following:
 *   - `'static'`: A static share mode.
 *   - `'dynamic'`: A dynamic share mode.
 *   - `'live'`: A live share mode.
 *   - `'permanent'`: A permanent share mode.
 * @property title - Optional. The title of the page.
 */
export interface MetaServerPageSettings {
  pageCompleteMetaName?: string
  shareImage?: string
  shareMode?: 'static' | 'dynamic' | 'live' | 'permanent'
  title?: string
}

/**
 * Props for the `BasePage` component, extending the `BoxProps` interface.
 *
 * @property appBar - Optional React element for the app bar, accepting `AppBarExProps`.
 * @property appFooter - Optional React element for the app footer.
 * @property beta - Indicates whether the page is in beta mode.
 * @property container - Specifies the container size. Can be one of: 'xl', 'lg', 'md', 'sm', 'xs'.
 * @property cookieConsent - Optional React node for displaying cookie consent information.
 * @property description - Meta description for the page.
 * @property disableGutters - If true, disables the default padding (gutters) of the container.
 * @property hideAppBar - If true, hides the app bar.
 * @property hideFooter - If true, hides the footer.
 * @property metaServer - Settings for the meta server page, defined by `MetaServerPageSettings`.
 * @property noindex - If true, adds a `noindex` meta tag to the page for SEO purposes.
 * @property scrollToTopButton - If true, displays a button to scroll to the top of the page.
 * @property title - Title of the page.
 */
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
