import HelpOutlineIcon from '@mui/icons-material/HelpOutline.js'
import { DialogProps, IconButton, IconButtonProps, SvgIconProps, Tooltip } from '@mui/material'
import { MessageDialog } from '@xylabs/react-dialogs'
import { JSXElementConstructor, useState } from 'react'

export interface QuickTipButtonProps extends IconButtonProps {
  Icon?: JSXElementConstructor<SvgIconProps>
  dialogProps?: Omit<DialogProps, 'open'>
  disableDialog?: boolean
  fontSize?: 'small' | 'medium' | 'large' | 'inherit'
  hoverText?: string
}

export const QuickTipButton: React.FC<QuickTipButtonProps> = ({
  fontSize = 'inherit',
  title = '',
  /** Removes dialog from the DOM and sets the css cursor to default */
  disableDialog,
  /** Props to pass on to the MessageDialog */
  dialogProps,
  hoverText,
  /** Replacement for the help icon */
  Icon,
  /** Component(s) passes directly to the Dialog */
  children,
  ...props
}) => {
  const [messageOpen, setMessageOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setMessageOpen(true)} size="small" sx={{ cursor: disableDialog ? 'default' : 'pointer' }} {...props}>
        <Tooltip title={hoverText ?? title ?? ''}>{Icon ? <Icon fontSize={fontSize} /> : <HelpOutlineIcon fontSize={fontSize} />}</Tooltip>
      </IconButton>

      {disableDialog ? null : (
        <MessageDialog
          onOk={() => setMessageOpen(false)}
          onCancel={() => setMessageOpen(false)}
          onClose={() => setMessageOpen(false)}
          open={messageOpen}
          title={title}
          {...dialogProps}
        >
          {children}
        </MessageDialog>
      )}
    </>
  )
}
