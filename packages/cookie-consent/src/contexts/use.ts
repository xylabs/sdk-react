import { useContext } from 'react'

import { CookieConsentContext } from './Context.ts'

const useCookieConsent = () => {
  return useContext(CookieConsentContext)
}

export { useCookieConsent }
