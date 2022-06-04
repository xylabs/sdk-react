import { useEffect, useState } from 'react'

export interface Size {
  height?: number
  width?: number
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    height: undefined,
    width: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
