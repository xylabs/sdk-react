import type { Mixpanel } from 'mixpanel-browser'
import { useContext } from 'react'

import { MixpanelContext } from './Context.ts'

export function useMixpanel(required: true): Mixpanel
export function useMixpanel(required?: false | 'warn'): Mixpanel | undefined
export function useMixpanel(required: boolean | 'warn' = 'warn'): Mixpanel | undefined {
  const { mixpanel } = useContext(MixpanelContext) ?? {}
  if (!mixpanel) {
    if (required === 'warn') {
      console.warn('No Mixpanel instance found in context')
    } else if (required === true) {
      throw new Error('No Mixpanel instance found in context')
    }
  }
  return mixpanel
}
