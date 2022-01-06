import { UserEventHandler } from '@xylabs/pixel'
import { createContext } from 'react'

interface Props {
  userEvents?: UserEventHandler<unknown>
}

const UserEventsContext = createContext<Props>({})
export { UserEventsContext }
