import type { UserEventHandler } from '@xylabs/pixel'
import { useContext } from 'react'

import { UserEventsContext } from '../contexts/index.ts'

export function useUserEvents<T>(): UserEventHandler<T>
export function useUserEvents<T>(required: true): UserEventHandler<T>
export function useUserEvents<T>(required?: false | 'warn'): UserEventHandler<T> | undefined
export function useUserEvents<T>(required: boolean | 'warn' = 'warn'): UserEventHandler<T> | undefined {
  const { userEvents } = useContext(UserEventsContext)
  if (!userEvents) {
    if (required === 'warn') {
      console.warn('No UserEvents instance found in context')
    } else if (required === true) {
      throw new Error('No UserEvents instance found in context')
    }
  }
  return userEvents as UserEventHandler<T> | undefined
}
