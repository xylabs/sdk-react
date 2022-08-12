import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { IconButton, IconButtonProps, Tooltip } from '@mui/material'
import { CSSProperties } from '@mui/styled-engine'
import { MessageDialog } from '@xylabs/react-dialogs'
import { useState } from 'react'

export interface QuickTipButtonProps extends IconButtonProps {
  fontSize?: 'small' | 'medium' | 'large' | 'inherit'
  disableDialog?: boolean
  hoverText?: string
}

export const QuickTipButton: React.FC<QuickTipButtonProps> = ({ fontSize = 'inherit', title = '', disableDialog, hoverText, children, ...props }) => {
  const [messageOpen, setMessageOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setMessageOpen(true)} size="small" sx={{ cursor: disableDialog ? 'default' : 'pointer' }} {...props}>
        <Tooltip title={hoverText ?? ''}>
          <HelpOutlineIcon fontSize={fontSize} />
        </Tooltip>
      </IconButton>

      {disableDialog ? null : (
        <MessageDialog
          onOk={() => setMessageOpen(false)}
          onCancel={() => setMessageOpen(false)}
          onClose={() => setMessageOpen(false)}
          open={messageOpen}
          title={title}
        >
          {children}
        </MessageDialog>
      )}
    </>
  )
}
