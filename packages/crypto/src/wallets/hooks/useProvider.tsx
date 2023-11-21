import { useMemo } from 'react'

import { EthWalletConnectorBase } from '../EthWalletConnectorBase'

export const useProvider = (ethWalletConnector: EthWalletConnectorBase) => {
  const { provider, providerName } = useMemo(() => {
    const metaMaskProvider = ethWalletConnector.provider
    const providerName = 'Meta Mask'
    return { provider: metaMaskProvider, providerName }
  }, [ethWalletConnector.provider])

  return { provider, providerName }
}
