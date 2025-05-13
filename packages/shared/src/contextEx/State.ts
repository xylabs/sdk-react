import type { EmptyObject } from './ContextExProviderProps.ts'

export type UndefinedValues<T extends EmptyObject> = {
  [K in keyof T]: undefined
}

export type ContextExState<T extends EmptyObject> = ProvidedContextExState<T> | NotProvidedContextExState<T>

export type ProvidedContextExState<T extends EmptyObject> = T & {
  provided: true
}

export type NotProvidedContextExState<T extends EmptyObject> = UndefinedValues<T> & {
  provided: false
}
