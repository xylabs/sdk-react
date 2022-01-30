import { UserEventHandler } from '@xylabs/pixel'
import React from 'react'

import { UserEventsContext } from './Context'

interface Props {
  userEvents: UserEventHandler<unknown>
}

export const UserEventsLoader: React.FC<Props> = ({ userEvents, children }) => {
  return <UserEventsContext.Provider value={{ userEvents }}>{children}</UserEventsContext.Provider>
}
