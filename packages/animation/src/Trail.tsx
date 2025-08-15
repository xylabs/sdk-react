import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import { a, useTrail } from '@react-spring/web'
import { isDefinedNotNull } from '@xylabs/typeof'
import type { CSSProperties } from 'react'
import React, { isValidElement } from 'react'

export interface TrailProps extends BoxProps {
  fullWidth?: boolean
  open: boolean
  trailStyles?: CSSProperties
}

export const Trail: React.FC<TrailProps> = ({
  fullWidth, open, trailStyles, children, ...props
}) => {
  // Ensure children is an array for iteration
  const childArray = isValidElement(children) ? [children] : (children as React.ReactNode[])
  const childArrayWithKey = childArray.map((child, index) => ({ child, key: index })).filter(({ child }) => isDefinedNotNull(child))
  const resolvedWidth = fullWidth ? '100%' : 'auto'

  const trail = useTrail(childArrayWithKey.length, {
    config: {
      friction: 200, mass: 5, tension: 2000,
    },
    from: { opacity: 0, y: 20 },
    display: 'flex',
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
  })

  return (
    <Box width={resolvedWidth} {...props}>
      {trail.map(({ ...style }, index) => (
        <a.div
          className={`trail-${index}`}
          key={childArrayWithKey[index].key}
          style={{ ...style, ...trailStyles }}
        >
          {childArrayWithKey[index].child}
        </a.div>
      ))}
    </Box>
  )
}
