import { isDefined } from '@xylabs/typeof'
import { useMemo, useSyncExternalStore } from 'react'

import type { EthWalletConnectorBase } from '../classes/index.ts'

/**
 * Subscribe to chainId changes from a given wallet
 *
 * Its easier for ethWalletConnector to be defined to avoid complex method signatures for subscribe function
 **/
export const useChainId = (ethWalletConnector?: EthWalletConnectorBase) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    if (ethWalletConnector?.installed) {
      return {
        getSnapShot: () => isDefined(ethWalletConnector) ? ethWalletConnector.chainId : undefined,
        subscribe: (onStoreChange: () => void) => ethWalletConnector?.subscribeToChainChanges(onStoreChange),
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
