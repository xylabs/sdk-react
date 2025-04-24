import { Typography, useTheme } from '@mui/material'
import { FlexCol } from '@xylabs/react-flexbox'
import React from 'react'

import type { ErrorViewerProps } from './ErrorViewerProps.ts'

const ErrorViewer: React.FC<ErrorViewerProps> = (props) => {
  const { error, ...boxProps } = props
  const theme = useTheme()
  return (
    <FlexCol color={theme.vars.palette.error.main} {...boxProps}>
      <Typography align="center" variant="subtitle1">
        {error?.name}
      </Typography>
      <Typography align="center" variant="body2">
        {error?.message}
      </Typography>
    </FlexCol>
  )
}

export { ErrorViewer }
