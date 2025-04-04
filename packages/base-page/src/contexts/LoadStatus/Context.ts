import { createContext } from 'react'

import type { LoadStatusContextState } from './State.ts'

export const LoadStatusContext = createContext<LoadStatusContextState>({
  status: 'done', setStatus: () => {}, setError: () => {},
})
