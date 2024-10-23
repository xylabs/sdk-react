import { useContext } from 'react'

import type { PromiseSettings } from './context.ts'
import { PromiseSettingsContext } from './context.ts'

export const usePromiseSettings = (): PromiseSettings => {
  return useContext(PromiseSettingsContext)
}
