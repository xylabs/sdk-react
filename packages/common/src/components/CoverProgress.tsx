import { CircularProgress, useTheme } from '@mui/material'
import { ErrorsViewer } from '@xylabs/react-error'
import { FlexGrowRow } from '@xylabs/react-flexbox'
import React from 'react'

export interface CoverProgressProps {
  errors?: Error[]
  onRetry?: () => void
  opacity?: number | string
  open?: boolean
  paper?: boolean
}

export const CoverProgress: React.FC<CoverProgressProps> = (props) => {
  const { paper = true, open, opacity = 0.25, errors, onRetry } = props
  const theme = useTheme()
  if (open) {
    return (
      <FlexGrowRow
        position="absolute"
        margin={-1}
        top={0}
        bottom={0}
        right={0}
        left={0}
        bgcolor={paper ? theme.palette.background.paper : theme.palette.background.default}
      >
        {(errors?.length ?? 0) === 0 ? <CircularProgress style={{ opacity }} /> : <ErrorsViewer margin={1} errors={errors} onRetry={onRetry} />}
      </FlexGrowRow>
    )
  }
  return null
}
