import {
  useCallback, useEffect, useState,
} from 'react'

export interface Size {
  height?: number
  width?: number
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const handleResize = useCallback(() => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])
  return windowSize
}
