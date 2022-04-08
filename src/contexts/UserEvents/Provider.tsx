import { UserEventHandler } from '@xylabs/pixel'

import { XyoUserEventHandler } from '../../lib'
import { WithChildren } from '../../WithChildren'
import { UserEventsContext } from './Context'

export interface UserEventsProviderProps<T> {
  userEvents: UserEventHandler<T>
}

export const UserEventsProvider: React.FC<WithChildren<UserEventsProviderProps<unknown>>> = ({
  userEvents,
  children,
}) => {
  return (
    <UserEventsContext.Provider value={{ userEvents: userEvents ?? XyoUserEventHandler.get() }}>
      {children}
    </UserEventsContext.Provider>
  )
}
