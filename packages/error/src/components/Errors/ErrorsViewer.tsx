import { Replay as ReplayIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { FlexGrowCol } from '@xylabs/react-flexbox'
import React from 'react'

import type { ErrorsViewerProps } from './ErrorsViewerProps.ts'
import { ErrorViewer } from './ErrorViewer.tsx'

const ErrorsViewer: React.FC<ErrorsViewerProps> = (props) => {
  const {
    onRetry, errors, ...boxProps
  } = props
  return (
    <FlexGrowCol padding={1} {...boxProps}>
      {errors?.map((error, index) => {
        // eslint-disable-next-line @eslint-react/no-array-index-key
        return <ErrorViewer error={error} key={index} />
      })}
      {onRetry
        ? (
            <IconButton onClick={onRetry}>
              <ReplayIcon />
            </IconButton>
          )
        : null}
    </FlexGrowCol>
  )
}

export { ErrorsViewer }
