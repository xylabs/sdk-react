import { animated, useSpring } from '@react-spring/web'
import type { FlexBoxProps } from '@xylabs/react-flexbox'
import React, { useEffect, useState } from 'react'

// Inspired by https://www.joshwcomeau.com/react/rotate/#bonus-that-star-animation-8

export interface RotationAnimationProps extends FlexBoxProps {
  rotation: number
}
export const RotationAnimation: React.FC<RotationAnimationProps> = ({ children, rotation }) => {
  const [isRotated, setIsRotated] = useState(false)
  const [springs, api] = useSpring(() => ({
    backfaceVisibility: 'hidden',
    config: {
      friction: 10,
      tension: 300,
    },
    display: 'inline-block',
    from: { rotate: '0deg' },
  }))

  const handleHover = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    api.start({
      from: { rotate: '0deg' },
      to: { rotate: `${rotation}deg` },
    })
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    api.start({
      from: { rotate: `${rotation}deg` },
      to: { rotate: '0deg' },
    })
  }

  useEffect(() => {
    if (!isRotated) {
      return
    }
    const timeoutId = globalThis.setTimeout(() => {
      setIsRotated(false)
    }, 5)
    return () => {
      globalThis.clearTimeout(timeoutId)
    }
  }, [isRotated])

  return (
    <animated.div onMouseEnter={handleHover} style={{ ...springs }}>
      {children}
    </animated.div>
  )
}
