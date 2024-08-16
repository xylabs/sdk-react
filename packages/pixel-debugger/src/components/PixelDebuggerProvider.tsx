import { DebugUserEventsContext } from '@xylabs/react-pixel'
import type { WithChildren } from '@xylabs/react-shared'
import { useLocalStorage } from '@xylabs/react-shared'
import React, { useMemo } from 'react'

export const PixelDebuggerProvider: React.FC<WithChildren> = ({ children }) => {
  const [isDebugging, setIsDebugging] = useLocalStorage<boolean>('isDebuggingPixel', false)
  const value = useMemo(() => ({ isDebugging, setIsDebugging }), [isDebugging, setIsDebugging])
  return <DebugUserEventsContext.Provider value={value}>{children}</DebugUserEventsContext.Provider>
}
