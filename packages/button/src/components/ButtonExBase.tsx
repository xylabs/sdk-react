import { Button, useTheme } from '@mui/material'
import { useUserEvents } from '@xylabs/react-pixel'
import {
  BusyCircularProgress, BusyLinearProgress, mergeBoxlikeStyles,
} from '@xylabs/react-shared'
import { isString, toPromise } from '@xylabs/sdk-js'
import type { MouseEvent } from 'react'
import React from 'react'

import type { ButtonExProps } from './ButtonExProps.tsx'

const ButtonExBase = ({
  ref, funnel, intent, target, placement, disableUserEvents, href, ...props
}: ButtonExProps) => {
  const theme = useTheme()
  const userEvents = useUserEvents()
  const {
    busy, busyVariant = 'linear', busyOpacity, onClick, children, ...rootProps
  } = mergeBoxlikeStyles<ButtonExProps>(theme, props)

  const localOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (busy) {
      // If it is busy, do not allow href clicks
      event.preventDefault()
    } else {
      const elementName = props['aria-label'] ?? event.currentTarget.textContent
      // we do this crazy navigate thing so that we can set it up outside the promise so that safari does not block it
      const windowToNavigate = () => (isString(target) && isString(href)) ? window.open('', target) ?? globalThis : globalThis
      const callOnClickAndFollowHref = (windowToNav = windowToNavigate()) => {
        onClick?.(event)
        if (isString(href)) {
          windowToNav.location.href = href
        }
      }
      if (!disableUserEvents && userEvents) {
        event.preventDefault()
        const windowToNav = windowToNavigate()
        if (isString(href)) {
          toPromise(userEvents.userClick({
            elementName, intent, funnel, placement,
          })).then(() => {
            callOnClickAndFollowHref(windowToNav)
          }).catch((ex) => {
            console.error('User event failed', elementName, funnel, placement, ex)
            callOnClickAndFollowHref(windowToNav)
          })
        }
        onClick?.(event)
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
}

ButtonExBase.displayName = 'ButtonExBaseXYLabs'

export { ButtonExBase }
