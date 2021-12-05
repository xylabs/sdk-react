import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle } from '@mui/material'

import { FlexCol, FlexRow } from '../FlexBox'

export interface MessageDialogProps extends DialogProps {
  onOk?: () => void
  onCancel?: () => void
}

export const MessageDialog: React.FC<MessageDialogProps> = ({ onOk, onCancel, children, title, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <FlexCol alignItems="stretch">{children}</FlexCol>
      </DialogContent>
      <DialogActions>
        <FlexRow justifyContent="space-between" width="100%">
          <Button onClick={onCancel} variant="text">
            Cancel
          </Button>
          <Button onClick={onOk} variant="text">
            Ok
          </Button>
        </FlexRow>
      </DialogActions>
    </Dialog>
  )
}
