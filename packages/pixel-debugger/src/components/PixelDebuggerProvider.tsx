import { DebugUserEventsContext } from '@xylabs/react-pixel'
import { useLocalStorage, WithChildren } from '@xylabs/react-shared'

export const PixelDebuggerProvider: React.FC<WithChildren> = ({ children }) => {
  const [isDebugging, setIsDebugging] = useLocalStorage<boolean>('isDebuggingPixel', false)
  return <DebugUserEventsContext.Provider value={{ isDebugging, setIsDebugging }}>{children}</DebugUserEventsContext.Provider>
}
