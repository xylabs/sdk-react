import { UserEventHandler } from '@xylabs/pixel'
import { useContext } from 'react'

import { UserEventsContext } from '../contexts'

export const useUserEvents = <T>() => {
  const { userEvents } = useContext(UserEventsContext)
  return userEvents as UserEventHandler<T>
}
