import { Link } from '@mui/material'
import { useUserEvents } from '@xylabs/react-pixel'
import type { MouseEvent } from 'react'
import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import type { LinkExProps } from './LinkExProps.tsx'

export const LinkToEx = forwardRef<HTMLAnchorElement, LinkExProps>(({
  intent,
  funnel,
  onClick,
  placement,
  disableUserEvents,
  ...props
}, ref) => {
  const userEvents = useUserEvents()
  const localOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!disableUserEvents && userEvents) {
      const elementName = props['aria-label'] ?? event.currentTarget.textContent
      userEvents.userClick({
        elementName, funnel, intent, placement,
      }).then(() => {
        onClick?.(event)
      }).catch((ex) => {
        console.error('User event failed', elementName, funnel, placement, ex)
        onClick?.(event)
      })
    } else {
      onClick?.(event)
    }
  }

  return <Link ref={ref} rel="noopener noreferrer" component={RouterLink} onClick={localOnClick} {...props} />
})

LinkToEx.displayName = 'LinkToExXYLabs'
