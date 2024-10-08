import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number) => {
  const intervalRef = useRef<number | NodeJS.Timeout>(-1)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()
    intervalRef.current = globalThis.setInterval(tick, delay)

    return () => globalThis.clearInterval(intervalRef.current)
  }, [delay])

  return intervalRef
}
