import { Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, Typography } from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'
import type { AxiosError } from 'axios'

export interface ErrorDialogProps extends DialogProps {
  error?: Error
  onAction?: (retry: boolean) => void
  title?: string
}

const toAxiosError = (error: Error) => {
  return (error as AxiosError).isAxiosError ? (error as AxiosError) : undefined
}

const ErrorDialogOpen: React.FC<ErrorDialogProps> = ({
  onAction,
  title = 'Oops. Something went wrong.',
  error = new Error('Unknown Error'),
  ...props
}) => {
  const onCloseClicked = () => {
    onAction?.(false)
  }

  const onRetryClicked = () => {
    onAction?.(true)
  }

  const axiosError = toAxiosError(error)
  const message = error.message ?? error.toString()

  return (
    <Dialog {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <FlexRow>
          <Typography color="error">{axiosError ? `${message} [${axiosError?.code ?? 'Connection Failure'}]` : `${message}`}</Typography>
        </FlexRow>
      </DialogContent>
      <DialogActions>
        <FlexRow justifyContent="space-between" width="100%" minWidth="300px">
          <ButtonEx onClick={onCloseClicked} variant="text">
            Close
          </ButtonEx>
          <ButtonEx onClick={onRetryClicked} variant="text">
            Retry
          </ButtonEx>
        </FlexRow>
      </DialogActions>
    </Dialog>
  )
}

export const ErrorDialog: React.FC<ErrorDialogProps> = ({ open, error, ...props }) => {
  return error ? <ErrorDialogOpen open={!!error || open} error={error} {...props} /> : null
}
