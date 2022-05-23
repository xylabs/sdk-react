import ReplayIcon from '@mui/icons-material/Replay'
import { IconButton } from '@mui/material'
import React from 'react'

import { FlexGrowCol } from '../FlexBox'
import { ErrorsViewerProps } from './ErrorsViewerProps'
import { ErrorViewer } from './ErrorViewer'

const ErrorsViewer: React.FC<ErrorsViewerProps> = (props) => {
  const { onRetry, errors, ...boxProps } = props
  return (
    <FlexGrowCol padding={1} {...boxProps}>
      {errors?.map((error, index) => {
        return <ErrorViewer error={error} key={index} />
      })}
      {onRetry ? (
        <IconButton onClick={onRetry}>
          <ReplayIcon />
        </IconButton>
      ) : null}
    </FlexGrowCol>
  )
}

export { ErrorsViewer }
