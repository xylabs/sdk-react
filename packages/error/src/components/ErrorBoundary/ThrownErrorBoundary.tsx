import type { ErrorInfo, ReactNode } from 'react'
import React, { Component } from 'react'
import type Rollbar from 'rollbar'

import { useErrorReporter } from '../../contexts/index.ts'
import type { ErrorEx } from '../ErrorEx.ts'
import { ErrorRender } from '../ErrorRender/index.ts'

export interface ThrownErrorBoundaryProps<T = void> {
  boundaryName?: string
  children: ReactNode
  errorComponent?: (e: ErrorEx<T>, boundaryName?: string) => ReactNode
  rethrow?: boolean
  rollbar?: Rollbar
  scope?: string
  title?: string
}

export interface ThrownErrorBoundaryState<T = void> {
  errorEx: ErrorEx<T> | undefined
  hasError?: boolean
  xyoError?: T
}

class ThrownErrorBoundaryInner<T> extends Component<ThrownErrorBoundaryProps<T>, ThrownErrorBoundaryState<T>> {
  override state: ThrownErrorBoundaryState<T> = { errorEx: undefined }

  static getDerivedStateFromError<T = void>(error: ErrorEx<T>) {
    const thrownErrorBoundaryState: ThrownErrorBoundaryState<T> = {
      hasError: true, errorEx: error, xyoError: ThrownErrorBoundaryInner.normalizeError<T>(error),
    }
    return thrownErrorBoundaryState
  }

  static normalizeError<T>(error: ErrorEx<T>): T {
    return error as T
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { rethrow, rollbar } = this.props
    const { errorEx } = this.state

    rollbar?.error(error)

    console.error('Error:', errorEx, errorInfo)
    if (rethrow) {
      throw error
    }
  }

  override render() {
    const { errorEx } = this.state
    const {
      children, boundaryName, errorComponent, scope, title,
    } = this.props

    // TODO - support custom error renderer for xyoErrors
    if (errorEx) {
      if (errorComponent) {
        return errorComponent(errorEx, boundaryName)
      }
      return <ErrorRender<T> error={errorEx} errorContext={`${boundaryName} Boundary`} scope={scope} title={title} />
    }

    return children
  }
}

// calling the hook outside of the component since only can be called in functional component
export function ThrownErrorBoundary<T = void>({ rollbar, ...props }: ThrownErrorBoundaryProps<T>): React.JSX.Element {
  const { rollbar: rollbarErrorReporter } = useErrorReporter()
  return <ThrownErrorBoundaryInner<T> rollbar={rollbar ?? rollbarErrorReporter ?? globalThis.rollbar} {...props} />
}
