import { useEffect, useState } from 'react'

export const useMounted = () => {
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])
  return () => {
    return mounted
  }
}
