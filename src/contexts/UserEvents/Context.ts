import { UserEventHandler } from '@xylabs/pixel'
import { createContext } from 'react'

export interface UserEventsProps {
  userEvents?: UserEventHandler<unknown>
}
export const UserEventsContext = createContext<UserEventsProps>({})

export interface DebugUserEventsProps {
  isDebugging: boolean
  setIsDebugging: (value: boolean) => void
}

export const DebugUserEventsContext = createContext<DebugUserEventsProps>({
  isDebugging: false,
  setIsDebugging: (value) => {
    console.warn('set is debugging is not set', value)
  },
})
