import type { EmptyObject } from '@xylabs/object'
import type { UserEventHandler } from '@xylabs/pixel'
import { use } from 'react'

import { UserEventsContext } from '../contexts/index.ts'

export function useUserEvents<T extends EmptyObject>(): UserEventHandler<T> | undefined
export function useUserEvents<T extends EmptyObject>(required: true): UserEventHandler<T>
export function useUserEvents<T extends EmptyObject>(required?: false | 'warn'): UserEventHandler<T> | undefined
export function useUserEvents<T extends EmptyObject>(required: boolean | 'warn' = 'warn'): UserEventHandler<T> | undefined {
  const { userEvents } = use(UserEventsContext)
  if (!userEvents) {
    if (required === 'warn') {
      console.warn('No UserEvents instance found in context')
    } else if (required === true) {
      throw new Error('No UserEvents instance found in context')
    }
  }
  return userEvents
}
