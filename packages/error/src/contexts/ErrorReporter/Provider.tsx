import type { PropsWithChildren } from 'react'
import React from 'react'
import type Rollbar from 'rollbar'

import { ErrorReporterContext } from './Context.ts'

export interface ErrorReporterProviderProps {
  rollbar: Rollbar
}

const ErrorReporterProvider: React.FC<PropsWithChildren<ErrorReporterProviderProps>> = ({ children, rollbar: rollbarProp }) => {
  const rollbar = rollbarProp ?? globalThis.rollbar

  if (!rollbar) {
    throw new Error('ErrorReporterProvider unable to find a Rollbar instance either passed as prop or from Provider')
  }

  // eslint-disable-next-line @eslint-react/no-unstable-context-value
  return <ErrorReporterContext value={{ rollbar }}>{children}</ErrorReporterContext>
}

export { ErrorReporterProvider }
