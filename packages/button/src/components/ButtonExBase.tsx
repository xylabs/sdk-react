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
  eventName = 'Click', funnel, placement, disableUserEvents, href, disableMixpanel, ...props
}, ref) => {
  const theme = useTheme()
  const userEvents = useUserEvents()
  const mixpanel = useMixpanel(false)
  const {
    target, busy, busyVariant = 'linear', busyOpacity, onClick, children, ...rootProps
  } = mergeBoxlikeStyles<ButtonExProps>(theme, props)

  const localOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (busy) {
      // If it is busy, do not allow href clicks
      event.preventDefault()
    } else {
      if (!disableMixpanel && mixpanel) {
        mixpanel.track(eventName, {
          funnel,
          placement,
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
  }

  return (
    <Button ref={ref} href={href} onClick={localOnClick} {...rootProps}>
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
