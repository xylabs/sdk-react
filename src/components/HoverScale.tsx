import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React, { PropsWithChildren } from 'react'

import { FlexRow } from './FlexBox'

type Props = PropsWithChildren<{
  scale?: number
}>

const HoverScale: React.FC<Props> = (props) => {
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

export { HoverScale }
