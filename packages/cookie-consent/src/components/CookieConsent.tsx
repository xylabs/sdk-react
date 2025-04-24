import React from 'react'

import { CookieConsentLoader, useCookieConsent } from '../contexts/index.ts'
import { CookieConsentBody } from './CookieConsentBody.tsx'
import type { CookieConsentProps } from './CookieConsentProps.tsx'

export const CookieConsent: React.FC<CookieConsentProps> = (props) => {
  const { storageName } = useCookieConsent()

  const Inner: React.FC = () => {
    const { accepted } = useCookieConsent()
    return accepted ? null : <CookieConsentBody {...props} />
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
