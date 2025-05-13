import type { EmptyObject } from './ContextExProviderProps.ts'

export type FixedValues<T extends EmptyObject, V> = {
  [K in keyof T]: V
}

export type ContextExState<T extends EmptyObject> = ProvidedContextExState<T> | NotProvidedContextExState<T>

export type ProvidedContextExState<T extends EmptyObject> = T & {
  provided: true
}

export type NotProvidedContextExState<T extends EmptyObject> = FixedValues<T, never> & {
  provided: false
}
