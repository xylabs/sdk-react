import { useMemo, useSyncExternalStore } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useChainIdExternal = (metamaskConnector: MetaMaskConnector) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => metamaskConnector.chainId,
      subscribe: (onStoreChange: () => void) => metamaskConnector.subscribeToChainChanges(onStoreChange),
    }
  }, [metamaskConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}

export const useChainId = (metamaskConnector: MetaMaskConnector) => {
  const chainIdHex = useChainIdExternal(metamaskConnector)
  const chainId = useMemo(() => Number(chainIdHex), [chainIdHex])
  return chainId
}
