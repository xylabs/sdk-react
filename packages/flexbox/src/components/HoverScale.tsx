import { Box } from '@mui/material'
import React from 'react'

import type { FlexBoxProps } from './FlexBoxProps.tsx'
import { FlexRow } from './FlexRow.tsx'

export type HoverScaleProps = FlexBoxProps & {
  scale?: number
}

export const HoverScale: React.FC<HoverScaleProps> = ({ scale, children, ...props }) => {
  return (
    <FlexRow {...props}>
      <Box
        sx={{
          zoomdiv: {
            '&:hover': {
              transform: `scale(${scale})`,
              transitionDuration: '0.2s',
              transitionTimingFunction: 'ease',
            },
          },
        }}
      >
        {children}
      </Box>
    </FlexRow>
  )
}
