import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material'
import {
  Container, Fab, Typography, useTheme,
} from '@mui/material'
import { CookieConsent } from '@xylabs/react-cookie-consent'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { ScrollToTop, ScrollToTopButton } from '@xylabs/react-scroll-to-top'
import React, { use } from 'react'
import { Helmet } from 'react-helmet'

import { LoadStatusContext } from '../../contexts/index.ts'
import type { BasePageProps } from './BasePageProps.ts'

const xyoOgMetaName = 'xyo:og:image'

// eslint-disable-next-line complexity
const BasePage: React.FC<BasePageProps> = ({
  disableGutters,
  children,
  beta,
  container,
  hideFooter,
  appFooter,
  appBar,
  cookieConsent,
  description,
  hideAppBar,
  metaServer,
  noindex = false,
  scrollToTopButton = false,
  title: titleProp,
  ...props
}) => {
  const { status, setStatus } = use(LoadStatusContext)
  const scrollToTopAnchorId = 'scroll-to-top-anchor'
  const {
    pageCompleteMetaName = xyoOgMetaName, title = titleProp, shareImage, shareMode = 'static',
  } = metaServer ?? {}

  if (shareMode === 'static' && status !== 'done') {
    setStatus('done')
  } else if ((xyoOgMetaName === pageCompleteMetaName) && shareImage && status !== 'done') {
    setStatus('done')
  }

  return (
    <FlexCol
      justifyContent="flex-start"
      alignItems="stretch"
      width="100%"
      maxWidth="100vw"
      minHeight="100vh"
      {...props}
    >
      <ScrollToTop />
      <Helmet title={title}>
        {noindex
          ? <meta content="noindex" name="robots" />
          : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description ?? title} />
      </Helmet>
      {scrollToTopButton
        ? <div id={scrollToTopAnchorId} />
        : null}
      {hideAppBar ? null : appBar}
      {beta
        ? (
            <FlexRow margin={1} position="absolute" top={0} left={0} bgcolor="#cccccc88" paddingX={1} style={{ opacity: 0.5 }}>
              <Typography variant="body2">Important: This page is a Beta page. It is possible that some information may not be correct.</Typography>
            </FlexRow>
          )
        : null}
      {container
        ? (
            <Container
              style={{
                alignItems: 'stretch', display: 'flex', flexDirection: 'column', flexGrow: 1,
              }}
              maxWidth={container}
              disableGutters={disableGutters}
            >
              {children}
            </Container>
          )
        : children}
      {hideFooter ? null : <footer>{appFooter}</footer>}
      {cookieConsent ?? (
        <CookieConsent borderRadius={0} />
      )}
      {scrollToTopButton
        ? (
            <ScrollToTopButton anchorId={scrollToTopAnchorId}>
              <Fab aria-label="scroll to top" color="secondary" size="small">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollToTopButton>
          )
        : null}
      <Helmet>
        <meta property="xy:meta:share:mode" content={shareMode} />
        {shareImage
          ? <meta property={xyoOgMetaName} content={shareImage} />
          : null}
        {/* This is here to make sure we report that the page is done */}
        {((xyoOgMetaName === pageCompleteMetaName) && shareImage)
          ? null
          : <meta property={pageCompleteMetaName} content="" />}
        <meta property="xy:meta:status" content={status ?? 'done'} />
      </Helmet>
    </FlexCol>
  )
}

export { BasePage }
