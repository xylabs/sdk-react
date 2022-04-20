import { FlexBoxProps } from '../FlexBox'

export interface CookieConsentProps extends FlexBoxProps {
  acceptOnScroll?: boolean
  acceptOnTimer?: number
  onAccept?: (accepted: boolean) => void
}