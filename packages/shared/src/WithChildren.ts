import type { ReactNode } from 'react'

export type WithChildren<T = unknown> = Omit<T, 'children'> & {
  children?: ReactNode | undefined
}
