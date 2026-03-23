import { isString } from '@xylabs/sdk-js'
import React from 'react'

import { CookieConsentLoader, useCookieConsent } from '../contexts/index.ts'
import { CookieConsentBody } from './CookieConsentBody.tsx'
import type { CookieConsentProps } from './CookieConsentProps.tsx'

const CookieConsentInner: React.FC<CookieConsentProps> = (props) => {
  const { accepted } = useCookieConsent()
  return accepted ? null : <CookieConsentBody {...props} />
}

export const CookieConsent: React.FC<CookieConsentProps> = (props) => {
  const { storageName } = useCookieConsent()

  // if not inside a context, make a context
  if (!isString(storageName)) {
    return (
      <CookieConsentLoader>
        <CookieConsentInner {...props} />
      </CookieConsentLoader>
    )
  }

  return <CookieConsentInner {...props} />
}
