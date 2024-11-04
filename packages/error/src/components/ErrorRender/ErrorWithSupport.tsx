import type { ButtonExProps } from '@xylabs/react-button'
import { ButtonEx } from '@xylabs/react-button'
import React from 'react'

import type { ErrorAlertProps } from './ErrorAlert.tsx'
import { ErrorAlert } from './ErrorAlert.tsx'

export interface ErrorRenderWithSupportProps extends ErrorAlertProps {
  scope?: string
  supportHref?: ButtonExProps['href']
  supportLinkText?: string
}

export const ErrorRenderWithSupport: React.FC<ErrorRenderWithSupportProps> = ({
  supportHref = '',
  supportLinkText = 'Support',
  error,
  onCancel,
  scope,
  ...props
}) => {
  return (
    <ErrorAlert
      action={(
        <ButtonEx
          target="_blank"
          color="inherit"
          size="small"
          href={supportHref}
          position="absolute"
          style={{ right: 8, top: 8 }}
        >
          {supportLinkText}
        </ButtonEx>
      )}
      error={error}
      scope={scope}
      onCancel={onCancel}
      {...props}
    >
    </ErrorAlert>
  )
}
