import { UserEventHandler } from '@xylabs/pixel'
import React from 'react'

import { XyoUserEventHandler } from '../../lib'
import { UserEventsContext } from './Context'

interface Props<T> {
  userEvents: UserEventHandler<T>
}

export const UserEventsProvider: React.FC<Props<unknown>> = ({ userEvents, children }) => {
  return (
    <UserEventsContext.Provider value={{ userEvents: userEvents ?? XyoUserEventHandler.get() }}>
      {children}
    </UserEventsContext.Provider>
  )
}
