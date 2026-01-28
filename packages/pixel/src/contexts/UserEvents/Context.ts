import type { UserEventHandler } from '@xylabs/pixel'
import type { EmptyObject } from '@xylabs/sdk-js'
import { createContext } from 'react'

export interface UserEventsProps<T extends EmptyObject = EmptyObject> {
  userEvents?: UserEventHandler<T>
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
