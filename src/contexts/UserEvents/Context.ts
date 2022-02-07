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
const DebugUserEventsContext = createContext<DebuggingProps>({
  isDebugging: false,
  setIsDebugging: (value) => {
    console.warn('set is debugging is not set', value)
  },
})

export { DebugUserEventsContext, UserEventsContext }
