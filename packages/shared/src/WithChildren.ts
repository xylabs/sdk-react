import type { ReactNode } from 'react'

/** @deprecated us PropsWithChildren from react instead */
export type WithChildren<T = unknown> = Omit<T, 'children'> & {
  children?: ReactNode | undefined
}
