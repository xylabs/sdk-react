import { ChevronRight, ExitToApp as ExitIcon } from '@mui/icons-material'
import type { AlertProps } from '@mui/material'
import {
  Alert, AlertTitle, Grow, Icon, IconButton, Stack, Typography,
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
  ...props
}: ErrorAlertProps<T>): React.JSX.Element {
  const [openDetails, setOpenDetails] = useState(false)
  return (
    <Alert action={action} severity="error" {...props}>
      <AlertTitle>{title}</AlertTitle>
      <FlexCol width="100%" alignItems="start" justifyContent="center" gap={1}>
        {additionalMessaging}
        <FlexRow gap={0.5} sx={{ cursor: 'pointer' }} onClick={() => setOpenDetails(!openDetails)}>
          <Typography variant="caption" fontWeight="bold">
            Details:
          </Typography>
          {openDetails ? <ChevronRight sx={{ transform: 'rotate(90deg)' }} /> : <ChevronRight />}
        </FlexRow>
        <Grow in={openDetails} unmountOnExit>
          <Stack>
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
