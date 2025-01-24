import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import React, { useRef } from 'react'

export interface AnimatedListProps {
  items?: { child: ReactNode; key: number }[]
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ items }) => {
  const ref = useRef<HTMLDivElement>(null)

  const transitions = useTransition(items, {
    from: {
      opacity: 0, height: 0, transform: 'translateY(-20px)',
    },
    enter: {
      opacity: 1, height: ref.current?.scrollHeight, transform: 'translateY(0px)',

    },
    leave: {
      opacity: 0, height: 0, transform: 'translateY(20px)',
    },
    keys: items?.map(item => item.key),
  })

  return (
    <>
      {transitions((styles, item) => (
        <animated.div style={styles} key={item?.key} ref={ref}>
          {item?.child}
        </animated.div>
      ))}
    </>
  )
}
