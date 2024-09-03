import { isLocalhost } from '@xylabs/react-shared'
import type {
  Config, Mixpanel, OverridedMixpanel,
} from 'mixpanel-browser'
import { default as untypedMixpanel } from 'mixpanel-browser'
import type { PropsWithChildren } from 'react'
import React, { useMemo } from 'react'

import { MixpanelContext } from './Context.ts'

const typedMixpanel = untypedMixpanel as unknown as OverridedMixpanel

export interface MixpanelProviderProps {
  config?: Partial<Config>
  id: string
}

export const MixpanelProvider: React.FC<PropsWithChildren<MixpanelProviderProps>> = ({
  children, config, id,
}) => {
  const mixpanel: Mixpanel = useMemo(() => {
    typedMixpanel.init(id, {
      persistence: 'localStorage',
      debug: isLocalhost(),
      ...config,
    })
    return typedMixpanel
  }, [id, config])

  const value = useMemo(() => ({ mixpanel }), [mixpanel])

  return (
    <MixpanelContext.Provider value={value}>
      {children}
    </MixpanelContext.Provider>
  )
}
