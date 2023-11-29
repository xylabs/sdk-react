import { useMemo, useSyncExternalStore } from 'react'

import { EthWalletConnectorBase } from '../third-party/classes'

export const useChainId = (ethWalletConnector: EthWalletConnectorBase) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    if (ethWalletConnector.installed) {
      return {
        getSnapShot: () => ethWalletConnector.chainId,
        subscribe: (onStoreChange: () => void) => ethWalletConnector.subscribeToChainChanges(onStoreChange),
      }
    }
    return {
      getSnapShot: () => undefined,
      subscribe: () => () => undefined,
    }
  }, [ethWalletConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}
