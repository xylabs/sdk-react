import type { PaperProps } from '@mui/material'

export interface CookieConsentProps extends PaperProps {
  acceptOnScroll?: boolean
  acceptOnTimer?: number
  onAccept?: (accepted: boolean) => void
}
