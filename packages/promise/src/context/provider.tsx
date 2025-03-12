import type { ReactElement } from 'react'
import React, { useMemo } from 'react'

import { type PromiseSettings, PromiseSettingsContext } from './context.ts'

export interface PromiseSettingsProviderProps extends Partial<PromiseSettings> {
  children?: ReactElement[] | ReactElement | undefined
}

export const PromiseSettingsProvider: React.FC<PromiseSettingsProviderProps> = ({
  logErrors = true, children, ...props
}) => {
  const value = useMemo(() => ({ logErrors, ...props }), [logErrors, props])
  return (
    <PromiseSettingsContext value={value}>
      {children}
    </PromiseSettingsContext>
  )
}
