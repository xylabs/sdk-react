import { UserEventHandler } from '@xylabs/pixel'
import React, { PropsWithChildren, useMemo } from 'react'

import { XyoUserEventHandler } from '../../lib/index.ts'
import { UserEventsContext } from './Context.ts'

export interface UserEventsProviderProps<T> {
  userEvents: UserEventHandler<T>
}

export const UserEventsProvider: React.FC<PropsWithChildren<UserEventsProviderProps<unknown>>> = ({ userEvents, children }) => {
  const value = useMemo(() => ({ userEvents: userEvents ?? XyoUserEventHandler.get() }), [userEvents])
  return <UserEventsContext.Provider value={value}>{children}</UserEventsContext.Provider>
}
