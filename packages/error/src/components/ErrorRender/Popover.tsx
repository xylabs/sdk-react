import { InfoOutline } from '@mui/icons-material'
import type { PopoverProps } from '@mui/material'
import { Icon, Popover } from '@mui/material'
import React, { useRef, useState } from 'react'

import { ErrorRender } from './Render.tsx'

export interface PopoverErrorProps extends Omit<PopoverProps, 'open' | 'anchorEl' | 'onClose'> {
  error?: Error
  scope?: string
}

export const PopoverErrorRender: React.FC<PopoverErrorProps> = ({
  error, scope, ...props
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  return error && (
    <Icon
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={ref}
      sx={{
        alignItems: 'center', cursor: 'pointer', display: 'inline-flex',
      }}
    >
      <InfoOutline color="error" fontSize="small" />
      <Popover
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorEl={ref.current}
        onClose={() => setOpen(false)}
        open={open}
        {...props}
      >
        <ErrorRender error={error} scope={scope} />
      </Popover>
    </Icon>
  )
}
