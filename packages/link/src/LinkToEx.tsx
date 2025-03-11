import { Link } from '@mui/material'
import { useUserEvents } from '@xylabs/react-pixel'
import type { MouseEvent } from 'react'
import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import type { LinkExProps } from './LinkExProps.tsx'

export const LinkToEx = ({
  ref, intent, funnel, onClick, to, toOptions, placement, disableUserEvents, ...props
}: LinkExProps & { ref?: React.RefObject<HTMLAnchorElement | null> }) => {
  const userEvents = useUserEvents()
  const navigate = useNavigate()
  const localOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!disableUserEvents && userEvents) {
      const elementName = props['aria-label'] ?? event.currentTarget.textContent
      const callOnClickAndNavigate = () => {
        try {
          onClick?.(event)
        } catch (ex) {
          console.error('onClick threw', elementName, funnel, placement, ex)
        }
        if (to && toOptions) {
          void navigate(to, toOptions)
        }
      }
      userEvents.userClick({
        elementName, funnel, intent, placement,
      }).then(callOnClickAndNavigate).catch((ex) => {
        console.error('User event failed', elementName, funnel, placement, ex)
        callOnClickAndNavigate()
      })
    } else {
      onClick?.(event)
    }
  }

  return <Link ref={ref} rel="noopener noreferrer" to={toOptions ? undefined : to} component={RouterLink} onClick={localOnClick} {...props} />
}

LinkToEx.displayName = 'LinkToExXYLabs'
