import { useContext } from 'react'

import { CookieConsentContext } from './Context.js'

const useCookieConsent = () => {
  return useContext(CookieConsentContext)
}

export { useCookieConsent }
