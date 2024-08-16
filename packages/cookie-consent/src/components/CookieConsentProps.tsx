import type { FlexBoxProps } from '@xylabs/react-flexbox'

export interface CookieConsentProps extends FlexBoxProps {
  acceptOnScroll?: boolean
  acceptOnTimer?: number
  onAccept?: (accepted: boolean) => void
}
