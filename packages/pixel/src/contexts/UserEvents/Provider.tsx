import { UserEventHandler } from '@xylabs/pixel'
import { PropsWithChildren } from 'react'

import { XyoUserEventHandler } from '../../lib'
import { UserEventsContext } from './Context'

export interface UserEventsProviderProps<T> {
  userEvents: UserEventHandler<T>
}

export const UserEventsProvider: React.FC<PropsWithChildren<UserEventsProviderProps<unknown>>> = ({ userEvents, children }) => {
  return <UserEventsContext.Provider value={{ userEvents: userEvents ?? XyoUserEventHandler.get() }}>{children}</UserEventsContext.Provider>
}
