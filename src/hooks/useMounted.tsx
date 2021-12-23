import { useEffect, useState } from 'react'

export const useMounted = () => {
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    setMounted(true)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setMounted(false)
    }
  }, [])
  return () => {
    return mounted
  }
}
