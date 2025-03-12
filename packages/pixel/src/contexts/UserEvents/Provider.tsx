import type { EmptyObject } from '@xylabs/object'
import type { UserEventHandler } from '@xylabs/pixel'
import type { PropsWithChildren } from 'react'
import React, { useMemo } from 'react'

import { XyoUserEventHandler } from '../../lib/index.ts'
import { UserEventsContext } from './Context.ts'

export interface UserEventsProviderProps<T extends EmptyObject = EmptyObject> {
  userEvents: UserEventHandler<T>
}

export const UserEventsProvider: React.FC<PropsWithChildren<UserEventsProviderProps>> = ({ userEvents, children }) => {
  const value = useMemo(() => ({ userEvents: userEvents ?? XyoUserEventHandler.get() }), [userEvents])
  return <UserEventsContext value={value}>{children}</UserEventsContext>
}
