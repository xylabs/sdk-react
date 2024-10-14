import { useLocation, useNavigate } from 'react-router-dom'

const DEFAULT_NAME = 'universalRedirect|to' as const

export const useSetUniversalRedirect = (name = DEFAULT_NAME) => {
  const location = useLocation()
  return (to?: string) => {
    localStorage.setItem(name, to ?? location.pathname)
  }
}

export const useCheckUniversalRedirect = (name = DEFAULT_NAME) => {
  const navigate = useNavigate()

  const pendingTo = localStorage.getItem(name)
  if (pendingTo !== null) {
    localStorage.removeItem(name)
    navigate(pendingTo)
  }
}
