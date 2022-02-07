import { UserEventHandler } from '@xylabs/pixel'
import { createContext } from 'react'

interface Props {
  userEvents?: UserEventHandler<unknown>
}
const UserEventsContext = createContext<Props>({})

interface DebuggingProps {
  isDebugging: boolean
  setIsDebugging: (value: boolean) => void
}
const DebugUserEventsContext = createContext<DebuggingProps>({ isDebugging: false })

export { DebugUserEventsContext, UserEventsContext }
