import type { Mixpanel } from 'mixpanel-browser'
import { useContext } from 'react'

import { MixpanelContext } from './Context.ts'

export const useMixpanel = (): Mixpanel | undefined => {
  const { mixpanel } = useContext(MixpanelContext) ?? {}
  if (!mixpanel) {
    console.warn('No Mixpanel instance found in context')
  }
  return mixpanel
}
