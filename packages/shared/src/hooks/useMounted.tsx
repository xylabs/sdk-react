import { useEffect, useState } from 'react'

export const useMounted = () => {
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    // disabling since we want to actually know the mounted state of the useEffect itself
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])
  return () => {
    return mounted
  }
}
