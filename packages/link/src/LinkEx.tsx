import { Link } from '@mui/material'
import { useMixpanel } from '@xylabs/react-mixpanel'
import { useUserEvents } from '@xylabs/react-pixel'
import type { MouseEvent } from 'react'
import React, { forwardRef } from 'react'

import type { LinkExProps } from './LinkExProps.tsx'
import { LinkToEx } from './LinkToEx.tsx'

export const LinkEx = forwardRef<HTMLAnchorElement, LinkExProps>(({
  onClick,
  disableMixpanel,
  disableUserEvents,
  eventName = 'Link Click',
  funnel,
  placement,
  target,
  href,
  to,
  ...props
}, ref) => {
  const userEvents = useUserEvents()
  const mixpanel = useMixpanel(false)
  const localOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // we do this crazy navigate thing so that we can set it up outside the promise so that safari does not block it
    const windowToNavigate = () => (target && href) ? window.open('', target) ?? window : window
    const callOnClickAndFollowHref = (windowToNav = windowToNavigate()) => {
      onClick?.(event)
      if (href) {
        windowToNav.location.href = href
      }
    }
    if (!disableMixpanel && mixpanel) {
      mixpanel.track(eventName, {
        funnel,
        placement: placement ?? props['aria-label'] ?? event.currentTarget.textContent,
      })
    }
    if (!disableUserEvents && userEvents) {
      event.preventDefault()
      const windowToNav = windowToNavigate()
      userEvents.userClick({ elementName: eventName, elementType: placement }).then(() => {
        callOnClickAndFollowHref(windowToNav)
      }).catch((ex) => {
        console.error('User event failed', eventName, ex)
        callOnClickAndFollowHref(windowToNav)
      })
    } else {
      callOnClickAndFollowHref()
    }
  }
  return to
    ? <LinkToEx ref={ref} to={to} target={target} onClick={onClick} {...props} />
    : <Link ref={ref} href={href} target={target} onClick={localOnClick} {...props} />
})

LinkEx.displayName = 'LinkExXYLabs'
