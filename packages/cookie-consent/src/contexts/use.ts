import { use } from 'react'

import { CookieConsentContext } from './Context.ts'

const useCookieConsent = () => {
  return use(CookieConsentContext)
}

export { useCookieConsent }
