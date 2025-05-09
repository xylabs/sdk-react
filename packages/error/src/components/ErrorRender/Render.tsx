import { FlexCol } from '@xylabs/react-flexbox'
import React, { useEffect } from 'react'

import { ErrorAlert } from './ErrorAlert.tsx'
import type { ErrorRenderProps } from './Props.ts'

export function ErrorRender<T = void>({
  onCancel,
  error,
  noErrorDisplay = false,
  customError = null,
  children,
  scope,
  useLocation,
  slotProps,
  sx,
  ...props
}: ErrorRenderProps<T>): React.JSX.Element {
  const location = useLocation?.()
  useEffect(() => {
    if (location) {
      // ensure we end up at the same place we are now after logging in
      location.state = { from: { pathname: globalThis.location.pathname } }
    }
  }, [location])

  useEffect(() => {
    if (error) {
      globalThis.rollbar?.error(error)
    }
  }, [error])

  return error
    ? (
        <FlexCol alignItems="stretch" {...props}>
          {noErrorDisplay
            ? customError
            : (
                <FlexCol alignItems="center" {...props}>
                  <ErrorAlert error={error} onCancel={onCancel} scope={scope} sx={{ position: 'relative', ...sx }} {...slotProps?.alert} />
                </FlexCol>
              )}
        </FlexCol>
      )
    : <>{children}</>
}
