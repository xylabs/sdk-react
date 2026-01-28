import { createContext } from 'react'

import type { EmptyObject } from './ContextExProviderProps.ts'
import type { ContextExState } from './State.ts'

// disabling because this is an extension of React context
// eslint-disable-next-line react-naming-convention/context-name
export const createContextEx = <T extends EmptyObject>() => createContext<ContextExState<T>>({ provided: false })
