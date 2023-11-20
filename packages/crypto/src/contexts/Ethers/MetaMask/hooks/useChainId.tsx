import { useMemo, useSyncExternalStore } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useChainId = (metamaskConnector: MetaMaskConnector) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => metamaskConnector.chainId,
      subscribe: (onStoreChange: () => void) => metamaskConnector.subscribeToChainChanges(onStoreChange),
    }
  }, [metamaskConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}
