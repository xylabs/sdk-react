import { DebugUserEventsContext } from '@xylabs/react-pixel'
import { useLocalStorage } from '@xylabs/react-shared'
import type { PropsWithChildren } from 'react'
import React, { useMemo } from 'react'

export const PixelDebuggerProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDebugging, setIsDebugging] = useLocalStorage<boolean>('isDebuggingPixel', false)
  const value = useMemo(() => ({ isDebugging, setIsDebugging }), [isDebugging, setIsDebugging])
  return <DebugUserEventsContext value={value}>{children}</DebugUserEventsContext>
}
