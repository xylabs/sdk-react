import React, { useEffect } from 'react'
import { NavigateOptions, To, useLocation, useNavigate } from 'react-router-dom'

interface RedirectProps {
  to: To
  toOptions?: NavigateOptions
  href?: string
}

const RedirectWithQuery: React.ComponentType<RedirectProps> = ({ href, to, toOptions }) => {
  const newPath = `${to}${document.location.search}`
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (href) {
      window.location.href = href
    } else {
      if (newPath !== pathname) {
        navigate(newPath, { replace: true, ...toOptions })
      }
    }
  })

  return <div />
}

export { RedirectWithQuery }
