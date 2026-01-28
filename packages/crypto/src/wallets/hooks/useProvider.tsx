import { isUndefined } from '@xylabs/sdk-js'
import { useMemo } from 'react'

import type { EthWalletConnectorBase } from '../classes/index.ts'

export const useProvider = (ethWalletConnector?: EthWalletConnectorBase) => {
  if (isUndefined(ethWalletConnector) || !ethWalletConnector.installed) return {
    provider: undefined, providerName: undefined, rawProvider: undefined,
  }

  return useMemo(() => {
    const provider = ethWalletConnector.provider
    const providerName = ethWalletConnector.providerName
    const rawProvider = ethWalletConnector.rawProvider

    return {
      provider, providerName, rawProvider,
    }
  }, [ethWalletConnector])
}
