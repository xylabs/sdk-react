import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { IconButton, IconButtonProps } from '@mui/material'
import { MessageDialog } from '@xylabs/react-common'
import { useState } from 'react'

export interface QuickTipButtonProps extends IconButtonProps {
  fontSize?: 'small' | 'medium' | 'large' | 'inherit'
}

export const QuickTipButton: React.FC<QuickTipButtonProps> = ({ fontSize = 'inherit', title, children, ...props }) => {
  const [messageOpen, setMessageOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setMessageOpen(true)} size="small" {...props}>
        <HelpOutlineIcon fontSize={fontSize} />
      </IconButton>
      <MessageDialog onOk={() => setMessageOpen(false)} onCancel={() => setMessageOpen(false)} onClose={() => setMessageOpen(false)} open={messageOpen} title={title ?? ''}>
        {children}
      </MessageDialog>
    </>
  )
}
