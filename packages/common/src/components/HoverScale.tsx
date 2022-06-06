import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { FlexRow } from '@xylabs/react-flexbox'
import React, { PropsWithChildren } from 'react'

export type HoverScaleProps = PropsWithChildren<{
  scale?: number
}>

export const HoverScale: React.FC<HoverScaleProps> = (props) => {
  const { children, scale = 1.1 } = props

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
    <FlexRow>
      <Box className={classes.zoomdiv}>{children}</Box>
    </FlexRow>
  )
}
