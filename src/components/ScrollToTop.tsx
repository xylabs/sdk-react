import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// The point of this component it to return to the top of the page on any router navigate

export const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
