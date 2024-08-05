import React from 'react'

import { CookieConsentLoader, useCookieConsent } from '../contexts/index.ts'
import { CookieConsentBody } from './CookieConsentBody.tsx'
import { CookieConsentProps } from './CookieConsentProps.tsx'

export const CookieConsent: React.FC<CookieConsentProps> = (props) => {
  const { storageName } = useCookieConsent()

  const Inner: React.FC = () => {
    const { accepted } = useCookieConsent()
    return accepted ? null : <CookieConsentBody background paper position="fixed" bottom={0} maxWidth="100vw" width="100%" zIndex={1000} {...props} />
  }

  // if not inside a context, make a context
  if (!storageName) {
    return (
      <CookieConsentLoader>
        <Inner />
      </CookieConsentLoader>
    )
  }

  return <Inner />
}
