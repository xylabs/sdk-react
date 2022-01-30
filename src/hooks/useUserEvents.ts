import { useContext } from 'react'

import { UserEventsContext } from '../contexts'

export const useUserEvents = () => {
  const { userEvents } = useContext(UserEventsContext)
  return userEvents
}
