import { useEffect, useRef } from 'react'

export const useTimeout = (callback: () => void, delay: number) => {
  const timeoutRef = useRef<number | NodeJS.Timeout>(-1)
  const savedCallbackRef = useRef(callback)

  useEffect(() => {
    savedCallbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallbackRef.current()
    timeoutRef.current = globalThis.setTimeout(tick, delay)

    return () => globalThis.clearTimeout(timeoutRef.current)
  }, [delay])

  return timeoutRef
}
