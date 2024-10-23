import { animated, useSpring } from '@react-spring/web'
import type { FlexBoxProps } from '@xylabs/react-flexbox'
import React, { useEffect, useState } from 'react'

// Inspired by https://www.joshwcomeau.com/react/rotate/#bonus-that-star-animation-8

export interface RotationAnimationProps extends FlexBoxProps {
  activation?: 'hover' | 'timer'
  rotation: number
}
export const RotationAnimation: React.FC<RotationAnimationProps> = ({
  children, activation = 'hover', rotation,
}) => {
  const [isRotated, setIsRotated] = useState(false)
  const activateOnHover = activation === 'hover'
  const activateOnTimer = activation === 'timer'

  const [springs, api] = useSpring(() => ({
    backfaceVisibility: 'hidden',
    config: {
      friction: 10,
      tension: 300,
    },
    display: 'inline-block',
    from: { rotate: '0deg' },
  }))

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (activateOnTimer) {
      handleHover()
      interval = setInterval(() => {
        handleHover()
      }, 5000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activateOnTimer])

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
    <animated.div onMouseEnter={activateOnHover ? handleHover : undefined} style={{ ...springs }}>
      {children}
    </animated.div>
  )
}
