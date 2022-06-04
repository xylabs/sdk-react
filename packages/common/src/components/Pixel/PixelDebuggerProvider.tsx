import { WithChildren } from '@xylabs/react-shared'

import { DebugUserEventsContext } from '../../contexts'
import { useLocalStorage } from '../../hooks'

export const PixelDebuggerProvider: React.FC<WithChildren> = ({ children }) => {
  const [isDebugging, setIsDebugging] = useLocalStorage<boolean>('isDebuggingPixel', false)
  return <DebugUserEventsContext.Provider value={{ isDebugging, setIsDebugging }}>{children}</DebugUserEventsContext.Provider>
}
