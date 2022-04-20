import { DebugUserEventsContext } from '../../contexts'
import { useLocalStorage } from '../../hooks'
import { WithChildren } from '../../WithChildren'

export const PixelDebuggerProvider: React.FC<WithChildren> = ({ children }) => {
  const [isDebugging, setIsDebugging] = useLocalStorage<boolean>('isDebuggingPixel', false)
  return <DebugUserEventsContext.Provider value={{ isDebugging, setIsDebugging }}>{children}</DebugUserEventsContext.Provider>
}
