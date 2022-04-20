import { CookieConsentLoader, useCookieConsent } from '../../contexts'
import { FlexBoxProps } from '../FlexBox'
import { CookieConsentBody } from './CookieConsentBody'

export interface CookieConsentProps extends FlexBoxProps {
  acceptOnScroll?: boolean
  acceptOnTimer?: number
  onAccept?: (accepted: boolean) => void
}

export const CookieConsent: React.FC<CookieConsentProps> = (props) => {
  const { storageName } = useCookieConsent()

  const Inner: React.FC = () => {
    const { accepted } = useCookieConsent()
    return accepted ? null : <CookieConsentBody background paper position="fixed" bottom={0} maxWidth="100vw" width="100%" zIndex={1000} {...props} />
  }

  //if not inside a context, make a context
  if (!storageName) {
    return (
      <CookieConsentLoader>
        <Inner />
      </CookieConsentLoader>
    )
  }

  return <Inner />
}
