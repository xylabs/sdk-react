import { Link } from '@mui/material'
import { useMixpanel } from '@xylabs/react-mixpanel'
import { useUserEvents } from '@xylabs/react-pixel'
import type { MouseEvent } from 'react'
import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import type { LinkExProps } from './LinkExProps.tsx'

export const LinkToEx = forwardRef<HTMLAnchorElement, LinkExProps>(({
  eventName = 'Link Click',
  funnel,
  onClick,
  placement,
  disableMixpanel,
  disableUserEvents,
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
      userEvents.userClick({ elementName: eventName, elementType: placement }).then(() => {
        onClick?.(event)
      }).catch((ex) => {
        console.error('User event failed', eventName, ex)
        onClick?.(event)
      })
    } else {
      onClick?.(event)
    }
  }

  return <Link ref={ref} rel="noopener noreferrer" component={RouterLink} onClick={localOnClick} {...props} />
})

LinkToEx.displayName = 'LinkToExXYLabs'
