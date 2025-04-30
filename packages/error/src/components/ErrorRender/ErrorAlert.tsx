import { ChevronRight, ExitToApp as ExitIcon } from '@mui/icons-material'
import type { AlertProps } from '@mui/material'
import {
  Alert, AlertTitle, Grow,
  Stack, Typography,
} from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
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
  sx,
  ...props
}: ErrorAlertProps<T>): React.JSX.Element {
  const [openDetails, setOpenDetails] = useState(false)
  return (
    <Alert
      action={(
        <FlexRow gap={0.5}>
          {action}
          {onCancel
            ? (
                <ButtonEx
                  color="error"

                  variant="outlined"
                  size="small"
                  onClick={onCancel}
                >
                  <ExitIcon fontSize="small" />
                </ButtonEx>
              )
            : null}
        </FlexRow>
      )}
      severity="error"
      sx={{ maxWidth: '100%', ...sx }}
      {...props}
    >
      <AlertTitle>{title}</AlertTitle>
      <FlexCol width="100%" alignItems="start" justifyContent="center" gap={1}>
        {additionalMessaging}
        <FlexRow gap={0.5} sx={{ cursor: 'pointer' }} onClick={() => setOpenDetails(!openDetails)}>
          <Typography variant="caption" fontWeight="bold">
            Details:
          </Typography>
          {openDetails ? <ChevronRight sx={{ fontSize: '1.1rem', transform: 'rotate(90deg)' }} /> : <ChevronRight sx={{ fontSize: '1.1rem' }} />}
        </FlexRow>
        <Grow in={openDetails} unmountOnExit>
          <Stack sx={{ hyphens: 'auto', maxWidth: '100%' }}>
            {scope
              ? (
                  <Stack direction="row" gap={0.25} sx={{ maxWidth: '100%' }}>
                    <Typography variant="caption" mr={0.5} fontWeight="bold">
                      Scope:
                    </Typography>
                    <Typography variant="caption">{scope}</Typography>
                  </Stack>
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
    </Alert>
  )
}
