import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number) => {
  const intervalRef = useRef<number>(-1)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()
    intervalRef.current = window.setInterval(tick, delay)

    return () => window.clearInterval(intervalRef.current)
  }, [delay])

  return intervalRef
}