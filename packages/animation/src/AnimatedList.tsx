import { animated, useTransition } from '@react-spring/web'
import type { CSSProperties, ReactNode } from 'react'
import React, { useMemo, useState } from 'react'

export type NodesWithKeys = { child: ReactNode; childHeight?: number; key: string }

export interface AnimatedListProps {
  fullWidth?: boolean
  itemStyles?: CSSProperties
  items?: NodesWithKeys[]
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  fullWidth, itemStyles, items,
}) => {
  const [height, setHeight] = useState(0)
  const itemsWithHeight = useMemo(() => height ? (items ?? []) : [], [items, height])

  const transitions = useTransition(itemsWithHeight, {
    from: {
      opacity: 0, height: 0, transform: 'translateY(-20px)',
    },
    enter: ({ childHeight }) => ({
      opacity: 1, height: childHeight ?? height, transform: 'translateY(0px)',
    }),
    leave: {
      opacity: 0, height: 0, transform: 'translateY(-20px)',
    },
  })

  return (
    <>
      {/* Use a hidden div to measure the height of the items.  Assumes all items have the same height */}
      <div
        ref={(newRef) => {
          if (newRef) {
          // get the height and assign it in state
            setHeight((height) => {
            // if height is already set, don't recalculate
              if (height > 0) return height
              // if height is not set and ref has height, use the ref's height
              if (newRef.scrollHeight > 0) {
                const capturedHeight = newRef.scrollHeight
                // hide the div so it doesn't affect the layout
                newRef.style.display = 'none'
                // return the captured height
                return capturedHeight
              } else {
                return 0
              }
            })
          }
        }}
        style={{ visibility: 'hidden', position: 'absolute' }}
      >
        {items?.[0]?.child}
      </div>
      {transitions((styles, item) => (
        <animated.div
          style={{
            ...itemStyles, ...(fullWidth ? { width: '100%' } : {}), ...styles,
          }}
          key={item?.key}
        >
          {item?.child}
        </animated.div>
      ))}
    </>
  )
}
