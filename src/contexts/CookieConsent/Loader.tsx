import { useState } from 'react'

import { CookieConsentContext } from './Context'

const CookiesAcceptedLocalStorageName = 'CookiesAccepted'

const CookieConsentLoader: React.FC = ({ children }) => {
  const getAcceptedFromLocalStorage = () => {
    return localStorage.getItem(CookiesAcceptedLocalStorageName) === 'true'
  }
  const setAcceptedToLocalStorage = (accepted: boolean) => {
    localStorage.setItem(CookiesAcceptedLocalStorageName, accepted ? 'true' : 'false')
  }
  const [accepted, setAccepted] = useState(getAcceptedFromLocalStorage())
  const setAcceptedHandler = (accepted: boolean) => {
    setAcceptedToLocalStorage(accepted)
    setAccepted(accepted)
  }

  const clearAccepted = () => {
    localStorage.removeItem(CookiesAcceptedLocalStorageName)
    setAccepted(getAcceptedFromLocalStorage())
  }

  return (
    <CookieConsentContext.Provider
      value={{ accepted, clearAccepted, setAccepted: setAcceptedHandler, storageName: CookiesAcceptedLocalStorageName }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export { CookieConsentLoader }
