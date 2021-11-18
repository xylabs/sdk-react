import { useContext } from 'react'

import { CookieConsentContext } from './Context'

const useCookieConsent = () => {
  return useContext(CookieConsentContext)
}

export { useCookieConsent }
