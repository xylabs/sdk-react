import { Box } from '@mui/material'

import { FlexBoxProps } from './FlexBoxProps'
import { FlexRow } from './FlexRow'

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
