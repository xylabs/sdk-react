import type { PropsWithChildren } from 'react'
import React, {
  useEffect, useMemo, useState,
} from 'react'

import { LoadStatusContext } from './Context.ts'

export type LoadStatusProviderProps = PropsWithChildren<{
  timeout?: number
}>

export const LoadStatusProvider: React.FC<LoadStatusProviderProps> = ({ timeout = 5000, children }) => {
  useEffect(() => {
    if (timeout !== 0 && timeout !== Infinity) {
      const id = setTimeout(() => {
        setStatus('error')
        setError(new Error('Timeout after ' + timeout + 'ms'))
      }, timeout)
      return () => {
        clearTimeout(id)
      }
    }
  }, [timeout])

  const [error, setError] = useState<Error | undefined>()
  const [status, setStatus] = useState<'done' | 'error' | 'loading'>('loading')
  const value = useMemo(() => {
    return {
      status,
      setStatus,
      setError,
      error,
    }
  }, [status, setStatus, error, setError])
  return <LoadStatusContext value={value}>{children}</LoadStatusContext>
}
