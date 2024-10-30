import { Link } from '@mui/material'
import { useUserEvents } from '@xylabs/react-pixel'
import type { MouseEvent } from 'react'
import React, { forwardRef } from 'react'

import type { LinkExProps } from './LinkExProps.tsx'
import { LinkToEx } from './LinkToEx.tsx'

export const LinkEx = forwardRef<HTMLAnchorElement, LinkExProps>(({
  onClick,
  disableUserEvents,
  funnel,
  intent,
  placement,
  target,
  href,
  to,
  toOptions,
  ...props
}, ref) => {
  const userEvents = useUserEvents()
  const localOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // we do this crazy navigate thing so that we can set it up outside the promise so that safari does not block it
    const windowToNavigate = () => (target && href) ? window.open('', target) ?? globalThis : globalThis
    const callOnClickAndFollowHref = (windowToNav = windowToNavigate()) => {
      onClick?.(event)
      if (href) {
        windowToNav.location.href = href
      }
    }
    if (!disableUserEvents && userEvents) {
      const elementName = props['aria-label'] ?? event.currentTarget.textContent
      event.preventDefault()
      const windowToNav = windowToNavigate()
      userEvents.userClick({
        elementName, funnel, intent, placement,
      }).then(() => {
        callOnClickAndFollowHref(windowToNav)
      }).catch((ex) => {
        console.error('User event failed', elementName, funnel, placement, ex)
        callOnClickAndFollowHref(windowToNav)
      })
    } else {
      callOnClickAndFollowHref()
    }
  }
  return to
    ? <LinkToEx ref={ref} to={to} toOptions={toOptions} target={target} onClick={onClick} {...props} />
    : <Link ref={ref} href={href} target={target} onClick={localOnClick} {...props} />
})

LinkEx.displayName = 'LinkExXYLabs'
