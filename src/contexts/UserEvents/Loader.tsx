import { UserEventHandler } from '@xylabs/pixel'
import React from 'react'

import { UserEventsContext } from './Context'

interface Props<T> {
  userEvents: UserEventHandler<T>
}

export const UserEventsLoader: React.FC<Props<unknown>> = ({ userEvents, children }) => {
  return <UserEventsContext.Provider value={{ userEvents }}>{children}</UserEventsContext.Provider>
}
