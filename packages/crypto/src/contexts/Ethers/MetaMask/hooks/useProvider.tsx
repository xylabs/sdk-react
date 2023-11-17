import { InfuraProvider, Provider, Web3Provider } from '@ethersproject/providers'
import { useMemo } from 'react'

import { infuraKey } from '../../Infura'
import { MetaMaskConnector } from '../../wallets'

export const useProviders = (
  metamaskConnector: MetaMaskConnector,
  chainId?: number,
): [Provider | undefined, Web3Provider | undefined, string | undefined] => {
  // Establish a provider from window or fallback to infura provider - should all wallet connector contexts do that?
  const [provider, walletProvider, providerName] = useMemo(() => {
    const walletProvider = metamaskConnector.provider
    let provider = null
    let providerName = null
    if (walletProvider) {
      provider = walletProvider
      providerName = metamaskConnector.providerName
    } else {
      provider = new InfuraProvider(chainId, infuraKey)
      providerName = 'Infura (Default)'
    }
    provider = walletProvider ?? provider
    return [provider, walletProvider, providerName]
  }, [chainId, metamaskConnector.provider, metamaskConnector.providerName])

  return [provider, walletProvider, providerName]
}
