import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import { a, useTrail } from '@react-spring/web'
import React, { isValidElement } from 'react'

export interface TrailProps extends BoxProps {
  fullWidth?: boolean
  open: boolean
}

export const Trail: React.FC<TrailProps> = ({
  fullWidth, open, children, ...props
}) => {
  // Ensure children is an array for iteration
  const childArray = isValidElement(children) ? [children] : (children as React.ReactNode[])
  const childArrayWithKey = childArray.map((child, index) => ({ child, key: index }))
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
        <a.div key={childArrayWithKey[index].key} style={{ ...style, width: resolvedWidth }}>
          <a.div className={`trail-${index}`}>{childArrayWithKey[index].child}</a.div>
        </a.div>
      ))}
    </Box>
  )
}
