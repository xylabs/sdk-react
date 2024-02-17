import { useMemo, useSyncExternalStore } from 'react'

import { EthWalletConnectorBase } from '../classes'

/**
 * Subscribe to chainId changes from a given wallet
 *
 * Note: Its easier for ethWalletConnector to be defined to avoid complex method signatures for subscribe function
 **/
export const useChainId = (ethWalletConnector: EthWalletConnectorBase) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    if (ethWalletConnector.installed) {
      return {
        getSnapShot: () => ethWalletConnector.chainId,
        subscribe: (onStoreChange: () => void) => ethWalletConnector.subscribeToChainChanges(onStoreChange),
      }
    }
    return {
      // eslint-disable-next-line unicorn/no-useless-undefined
      getSnapShot: () => undefined,
      // eslint-disable-next-line unicorn/no-useless-undefined
      subscribe: () => () => undefined,
    }
  }, [ethWalletConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}
