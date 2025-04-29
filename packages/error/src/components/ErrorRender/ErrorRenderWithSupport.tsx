import { BugReport } from '@mui/icons-material'
import type { AlertProps } from '@mui/material'
import type { ButtonExProps } from '@xylabs/react-button'
import { ButtonEx } from '@xylabs/react-button'
import React from 'react'

import type { ErrorRenderProps } from './Props.ts'
import { ErrorRender } from './Render.tsx'

export interface ErrorRenderWithSupportProps extends ErrorRenderProps {
  /** @deprecated - use slotProps.alert.action */
  action: AlertProps['action']
  supportHref?: ButtonExProps['href']
  supportLinkText?: string
}

export const ErrorRenderWithSupport: React.FC<ErrorRenderWithSupportProps> = ({
  supportHref,
  supportLinkText,
  ...props
}) => {
  return (
    <ErrorRender
      slotProps={{
        alert: {
          action: supportHref && supportLinkText && (
            <ButtonEx
              startIcon={<BugReport />}
              color="error"
              variant="outlined"
              target="_blank"
              size="small"
              href={supportHref}
            >
              {supportLinkText}
            </ButtonEx>
          ),
        },
      }}
      {...props}
    />
  )
}
