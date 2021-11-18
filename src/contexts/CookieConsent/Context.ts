import { createContext } from 'react'

const CookieConsentContext = createContext<{
  accepted?: boolean
  setAccepted?: (accepted: boolean) => void
  clearAccepted?: () => void
  storageName?: string
}>({})
export { CookieConsentContext }
