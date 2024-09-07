import { Button, useTheme } from '@mui/material'
import { useMixpanel } from '@xylabs/react-mixpanel'
import { useUserEvents } from '@xylabs/react-pixel'
import {
  BusyCircularProgress, BusyLinearProgress, mergeBoxlikeStyles,
} from '@xylabs/react-shared'
import type { MouseEvent } from 'react'
import React, { forwardRef } from 'react'

import type { ButtonExProps } from './ButtonExProps.tsx'

const ButtonExBase = forwardRef<HTMLButtonElement, ButtonExProps>(({
  eventName = 'Button Click', funnel, target, placement, disableUserEvents, href, disableMixpanel, ...props
}, ref) => {
  const theme = useTheme()
  const userEvents = useUserEvents()
  const mixpanel = useMixpanel(false)
  const {
    busy, busyVariant = 'linear', busyOpacity, onClick, children, ...rootProps
  } = mergeBoxlikeStyles<ButtonExProps>(theme, props)

  const localOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (busy) {
      // If it is busy, do not allow href clicks
      event.preventDefault()
    } else {
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
          placement: placement ?? rootProps['aria-label'] ?? event.currentTarget.textContent,
        })
      }
      if (!disableUserEvents && userEvents) {
        event.preventDefault()
        const windowToNav = windowToNavigate()
        if (href) {
          userEvents.userClick({ elementName: eventName, elementType: placement }).then(() => {
            callOnClickAndFollowHref(windowToNav)
          }).catch((ex) => {
            console.error('User event failed', eventName, ex)
            callOnClickAndFollowHref(windowToNav)
          })
        }
      } else {
        callOnClickAndFollowHref()
      }
    }
  }

  return (
    <Button ref={ref} href={href} onClick={localOnClick} target={target} {...rootProps}>
      {busy && busyVariant === 'linear'
        ? <BusyLinearProgress rounded opacity={busyOpacity ?? 0} />
        : null}
      {busy && busyVariant === 'circular'
        ? <BusyCircularProgress rounded size={24} opacity={busyOpacity ?? 0.5} />
        : null}
      {children}
    </Button>
  )
})

ButtonExBase.displayName = 'ButtonExBaseXYLabs'

export { ButtonExBase }
