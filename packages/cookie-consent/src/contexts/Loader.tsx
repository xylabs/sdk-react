import type { WithChildren } from '@xylabs/react-shared'
import React, { useMemo, useState } from 'react'

import { CookieConsentContext } from './Context.ts'

const CookiesAcceptedLocalStorageName = 'CookiesAccepted'

const getAcceptedFromLocalStorage = () => {
  return localStorage.getItem(CookiesAcceptedLocalStorageName) === 'true'
}

const setAcceptedToLocalStorage = (accepted: boolean) => {
  localStorage.setItem(CookiesAcceptedLocalStorageName, accepted ? 'true' : 'false')
}

const CookieConsentLoader: React.FC<WithChildren> = ({ children }) => {
  const [accepted, setAccepted] = useState(getAcceptedFromLocalStorage())
  const setAcceptedHandler = (accepted: boolean) => {
    setAcceptedToLocalStorage(accepted)
    setAccepted(accepted)
  }

  const clearAccepted = () => {
    localStorage.removeItem(CookiesAcceptedLocalStorageName)
    setAccepted(getAcceptedFromLocalStorage())
  }

  const value = useMemo(() => ({ accepted, clearAccepted, setAccepted: setAcceptedHandler, storageName: CookiesAcceptedLocalStorageName }), [accepted, clearAccepted, setAcceptedHandler])

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export { CookieConsentLoader }
