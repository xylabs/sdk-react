import { useMemo } from 'react'

import { EthWalletConnectorBase } from '../classes/index.js'

export const useProvider = (ethWalletConnector: EthWalletConnectorBase) => {
  const { provider, providerName } = useMemo(() => {
    const provider = ethWalletConnector.provider
    const providerName = ethWalletConnector.providerName
    return { provider, providerName }
  }, [ethWalletConnector])

  if (ethWalletConnector.installed) {
    return { provider, providerName }
  }
  return {}
}
