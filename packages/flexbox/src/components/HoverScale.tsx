import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

import { FlexBoxProps, FlexRow } from './FlexRow'

export type HoverScaleProps = FlexBoxProps & {
  scale?: number
}

export const HoverScale: React.FC<HoverScaleProps> = ({ scale, children, ...props }) => {
  const useStyles = makeStyles(() =>
    createStyles({
      zoomdiv: {
        '&:hover': {
          transform: `scale(${scale})`,
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease',
        },
      },
    })
  )

  const classes = useStyles()

  return (
    <FlexRow {...props}>
      <Box className={classes.zoomdiv}>{children}</Box>
    </FlexRow>
  )
}
