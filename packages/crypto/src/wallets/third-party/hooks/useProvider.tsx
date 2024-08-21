import { useMemo } from 'react'

import type { EthWalletConnectorBase } from '../classes/index.ts'

export const useProvider = (ethWalletConnector: EthWalletConnectorBase) => {
  const {
    provider, providerName,
  } = useMemo(() => {
    const provider = ethWalletConnector.provider
    const providerName = ethWalletConnector.providerName
    return {
      provider, providerName,
    }
  }, [ethWalletConnector])

  if (ethWalletConnector.installed) {
    return {
      provider, providerName,
    }
  }
  return {}
}
