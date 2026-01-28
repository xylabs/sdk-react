import { isDefined } from '@xylabs/typeof'
import { useMemo, useSyncExternalStore } from 'react'

import type { EthWalletConnectorBase } from '../classes/index.ts'

// stable value for getSnapShot
export const EMPTY_ARRAY = [] as const

/**
 * Subscribe to account changes from a given wallet
 **/
export const useCurrentAccountExternal = (ethWalletConnector?: EthWalletConnectorBase) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => isDefined(ethWalletConnector) ? ethWalletConnector.allowedAccounts : EMPTY_ARRAY,
      subscribe: (notifier: () => void) => isDefined(ethWalletConnector) ? ethWalletConnector.subscribeToAccountsChanges(notifier) : () => {},
    }
  }, [ethWalletConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}
