import { useMemo } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useProvider = (metamaskConnector: MetaMaskConnector) => {
  const { provider, providerName } = useMemo(() => {
    const metaMaskProvider = metamaskConnector.provider
    const providerName = 'Meta Mask'
    return { provider: metaMaskProvider, providerName }
  }, [metamaskConnector.provider])

  return { provider, providerName }
}
