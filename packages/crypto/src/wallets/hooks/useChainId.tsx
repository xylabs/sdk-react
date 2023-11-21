import { useMemo, useSyncExternalStore } from 'react'

import { EthWalletConnectorBase } from '../../wallets'

export const useChainId = (ethWalletConnector: EthWalletConnectorBase) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => ethWalletConnector.chainId,
      subscribe: (onStoreChange: () => void) => ethWalletConnector.subscribeToChainChanges(onStoreChange),
    }
  }, [ethWalletConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}
