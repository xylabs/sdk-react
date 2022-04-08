import { ReactNode } from 'react'

export type WithChildren<T = unknown> = Partial<T> & { children?: ReactNode }
