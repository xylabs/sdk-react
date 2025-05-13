import { createContext } from 'react'

import type { EmptyObject } from './ContextExProviderProps.ts'
import type { ContextExState } from './State.ts'

// eslint-disable-next-line @eslint-react/naming-convention/context-name
export const createContextEx = <T extends EmptyObject>() => createContext<ContextExState<T>>({ provided: false })
