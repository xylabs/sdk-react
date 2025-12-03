import { createContext } from 'react'

import type { EmptyObject } from './ContextExProviderProps.ts'
import type { ContextExState } from './State.ts'

export const createContextEx = <T extends EmptyObject>() => createContext<ContextExState<T>>({ provided: false })
