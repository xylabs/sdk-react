import { CopyAllOutlined, Error } from '@mui/icons-material'
import type {
  IconButtonProps, SvgIconOwnProps, SvgIconTypeMap,
} from '@mui/material'
import {
  Icon, IconButton, Tooltip,
} from '@mui/material'
import type { OverridableComponent } from '@mui/material/OverridableComponent'
import React, { useState } from 'react'

import { onCopy } from './onCopy.ts'

export interface CopyIconButtonProps extends IconButtonProps {
  MuiIcon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
  copyIconProps?: SvgIconOwnProps
  onCopyCallback?: () => void
  value?: string
}

export const CopyIconButton: React.FC<CopyIconButtonProps> = ({
  MuiIcon = CopyAllOutlined, copyIconProps, onCopyCallback, value, ...props
}) => {
  const [error, setError] = useState<Error>()

  const handleCopy = async () => {
    try {
      await onCopy(value)
      onCopyCallback?.()
    } catch (e) {
      setError(e as Error)
    }
  }
  return (
    <IconButton onClick={() => void handleCopy()} {...props}>
      <MuiIcon {...copyIconProps} />
      {error && (
        <Tooltip title={error.message} placement="top">
          <Icon>
            <Error fontSize="small" color="error" />
          </Icon>
        </Tooltip>
      )}
    </IconButton>
  )
}
