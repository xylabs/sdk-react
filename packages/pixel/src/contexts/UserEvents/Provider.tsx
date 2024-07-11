import { UserEventHandler } from '@xylabs/pixel'
import { PropsWithChildren } from 'react'

import { XyoUserEventHandler } from '../../lib/index.js'
import { UserEventsContext } from './Context.js'

export interface UserEventsProviderProps<T> {
  userEvents: UserEventHandler<T>
}

export const UserEventsProvider: React.FC<PropsWithChildren<UserEventsProviderProps<unknown>>> = ({ userEvents, children }) => {
  return <UserEventsContext.Provider value={{ userEvents: userEvents ?? XyoUserEventHandler.get() }}>{children}</UserEventsContext.Provider>
}
