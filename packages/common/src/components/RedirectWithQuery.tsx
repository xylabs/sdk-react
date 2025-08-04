import { isString } from '@xylabs/typeof'
import React, { useEffect } from 'react'
import type { NavigateOptions, To } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

export interface RedirectWithQueryProps {
  href?: string
  to?: To
  toOptions?: NavigateOptions
}

export const RedirectWithQuery: React.ComponentType<RedirectWithQueryProps> = ({
  href, to, toOptions,
}) => {
  const newPath = `${to}${document.location.search}`
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (isString(href)) {
      globalThis.location.href = href
    } else {
      if (newPath !== pathname) {
        void navigate(newPath, { replace: true, ...toOptions })
      }
    }
  })

  return <div />
}
