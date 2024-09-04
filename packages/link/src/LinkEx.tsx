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
    if (!disableMixpanel && mixpanel) {
      mixpanel.track(eventName, {
        funnel,
        placement: placement ?? props['aria-label'] ?? event.currentTarget.textContent,
      })
    }
    if (!disableUserEvents && userEvents) {
      const callOnClickAndFollowHref = () => {
        onClick?.(event)
        if (href) {
          if (target) {
            window.open(href, target)
          } else {
            window.location.href = href
          }
        }
      }
      event.preventDefault()
      userEvents.userClick({ elementName: eventName, elementType: placement }).then(() => {
        callOnClickAndFollowHref()
      }).catch((ex) => {
        console.error('User event failed', eventName, ex)
        callOnClickAndFollowHref()
      })
    }
  }
  return to
    ? <LinkToEx ref={ref} to={to} target={target} onClick={localOnClick} {...props} />
    : <Link ref={ref} href={href} target={target} onClick={localOnClick} {...props} />
})

LinkEx.displayName = 'LinkExXYLabs'
