import { useEffect, useState } from 'react'

export const useMounted = () => {
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])
  return () => {
    return mounted
  }
}
