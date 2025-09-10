import { isUndefined } from '@xylabs/typeof'
import { useMemo } from 'react'

import type { EthWalletConnectorBase } from '../../classes/index.ts'

export const useProvider = (ethWalletConnector?: EthWalletConnectorBase) => {
  if (isUndefined(ethWalletConnector) || !ethWalletConnector.installed) return { provider: undefined, providerName: undefined }

  return useMemo(() => {
    const provider = ethWalletConnector.provider
    const providerName = ethWalletConnector.providerName

    return { provider, providerName }
  }, [ethWalletConnector])
}
