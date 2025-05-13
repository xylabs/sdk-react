import type { Context } from 'react'
import { use } from 'react'

import type { EmptyObject } from './ContextExProviderProps.ts'
import type { ContextExState } from './State.ts'

export const useContextEx = <T extends EmptyObject>(context: Context<ContextExState<T>>, contextName: string, required = true) => {
  const { provided, ...props } = use(context)
  if (!provided && required) {
    throw new Error(`use${contextName} can not be used outside of a ${contextName} Context when required=true`)
  }
  return props
}

export const useProvided = <T extends EmptyObject>(context: Context<ContextExState<T>>) => {
  const { provided } = use(context)
  return provided
}
