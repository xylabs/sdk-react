import { LogoutRounded } from '@mui/icons-material'
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ListItem, ListItemIcon, type ListItemProps, ListItemText,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'

import { alphaCss } from '../../../alphaCss.ts'
import { StyledFlexRow, StyledListItemButton } from './StyledListItemButton.tsx'

export const LogoutListItem: React.FC<ListItemProps> = (props) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ListItem
        disablePadding
        sx={{ paddingBottom: 1 }}
        {...props}
      >
        <StyledListItemButton
          onClick={handleClickOpen}
          disableRipple
          disableTouchRipple
          active={false}
        >
          <StyledFlexRow>
            <ListItemIcon
              sx={{ color: alphaCss(theme.vars.palette.text.primary, 0.5), justifyContent: 'center' }}
            >
              <LogoutRounded />
            </ListItemIcon>
            <ListItemText
              sx={{ color: alphaCss(theme.vars.palette.text.primary, 0.5) }}
              primary="Logout"
            />
          </StyledFlexRow>
        </StyledListItemButton>
      </ListItem>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="logout-dialog-title"
      >
        <DialogTitle id="logout-dialog-title">Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
