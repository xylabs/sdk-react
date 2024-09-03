import type { Mixpanel } from 'mixpanel-browser'
import { createContext } from 'react'

export interface MixpanelContextProps {
  mixpanel?: Mixpanel
}

export const MixpanelContext = createContext<MixpanelContextProps | undefined>(undefined)
