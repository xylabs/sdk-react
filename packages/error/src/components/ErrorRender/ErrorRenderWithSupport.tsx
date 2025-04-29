import { BugReport } from '@mui/icons-material'
import {
  type AlertProps, IconButton, Link,
  Tooltip,
} from '@mui/material'
import type { ButtonExProps } from '@xylabs/react-button'
import React, { useMemo } from 'react'

import type { ErrorRenderProps } from './Props.ts'
import { ErrorRender } from './Render.tsx'

export interface ErrorRenderWithSupportProps extends ErrorRenderProps {
  /** @deprecated - use slotProps.alert.action */
  action?: AlertProps['action']
  supportHref?: ButtonExProps['href']
  supportIcon?: React.ReactNode
  /** @deprecated - use supportLinkTitle instead */
  supportLinkText?: string
  supportLinkTitle?: string
}

export const ErrorRenderWithSupport: React.FC<ErrorRenderWithSupportProps> = ({
  supportHref,
  supportIcon,
  supportLinkTitle = 'Support',
  slotProps,
  ...props
}) => {
  const combinedSlotProps = useMemo(() => ({
    ...slotProps,
    alert: {
      ...slotProps?.alert,
      action: supportHref && (
        <Link href={supportHref} target="_blank">
          <Tooltip title={supportLinkTitle}>
            <IconButton color="error" size="small">
              {supportIcon ?? <BugReport />}
            </IconButton>
          </Tooltip>
        </Link>
      ),
    },
  }), [slotProps, supportHref])

  return (
    <ErrorRender
      slotProps={combinedSlotProps}
      {...props}
    />
  )
}
