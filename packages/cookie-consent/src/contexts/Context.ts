import { createContext } from 'react'

const CookieConsentContext = createContext<{
  accepted?: boolean
  clearAccepted?: () => void
  setAccepted?: (accepted: boolean) => void
  storageName?: string
}>({})
export { CookieConsentContext }
