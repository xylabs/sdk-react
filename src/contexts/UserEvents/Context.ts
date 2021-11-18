import { UserEventHandler } from '@xylabs/pixel'
import React from 'react'

interface Props {
  userEvents?: UserEventHandler<unknown>
}

const UserEventsContext = React.createContext<Props>({})
export { UserEventsContext }
