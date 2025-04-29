import { ChevronRight, ExitToApp as ExitIcon } from '@mui/icons-material'
import type { AlertProps } from '@mui/material'
import {
  Alert, AlertTitle, Chip, Collapse, Grow, Stack, Typography,
} from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import { FlexCol } from '@xylabs/react-flexbox'
import React, { useState } from 'react'

export interface ErrorAlertProps<T = void> extends AlertProps {
  additionalMessaging?: React.ReactNode
  error?: T | Error | string
  onCancel?: () => void
  scope?: string
}

export function ErrorAlert<T = void>({
  action,
  additionalMessaging,
  title = 'Whoops! Something went wrong',
  onCancel,
  error = 'An unknown error occurred',
  scope,
  ...props
}: ErrorAlertProps<T>): React.JSX.Element {
  const [openDetails, setOpenDetails] = useState(false)
  return (
    <Alert action={action} severity="error" {...props}>
      <AlertTitle>{title}</AlertTitle>
      <FlexCol width="100%" alignItems="start" gap={1}>
        {additionalMessaging}
        <Chip
          avatar={openDetails ? <ChevronRight sx={{ transform: 'rotate(90deg)' }} /> : <ChevronRight />}
          label="Error Details"
          onClick={() => setOpenDetails(!openDetails)}
          sx={{ mt: 1 }}
          variant="outlined"
        />
        <Grow in={openDetails} unmountOnExit>
          <Stack sx={{
            border: '1px solid', borderColor: 'divider', borderRadius: 1, padding: 1, mt: 1,
          }}
          >
            {scope
              ? (
                  <div>
                    <Typography variant="caption" mr={0.5} fontWeight="bold">
                      Scope:
                    </Typography>
                    <Typography variant="caption">{scope}</Typography>
                  </div>
                )
              : null}
            <div>
              <Typography variant="caption" mr={0.5} fontWeight="bold">
                Error:
              </Typography>
              <Typography variant="caption">{typeof error === 'string' ? error : (error as Error)?.message}</Typography>
            </div>
          </Stack>
        </Grow>
      </FlexCol>
      {onCancel
        ? (
            <ButtonEx
              variant="outlined"
              size="small"
              onClick={onCancel}
              position="absolute"
              style={{ right: 8, top: action ? 42 : 8 }}
            >
              <ExitIcon fontSize="small" />
            </ButtonEx>
          )
        : null}
    </Alert>
  )
}
