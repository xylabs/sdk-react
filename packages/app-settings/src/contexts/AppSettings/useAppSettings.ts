import { use } from 'react'

import { AppSettingsContext } from './Context.ts'

export const useAppSettings = () => {
  return use(AppSettingsContext)
}
