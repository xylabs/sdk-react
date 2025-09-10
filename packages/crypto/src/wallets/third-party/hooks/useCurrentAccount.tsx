import { EthAddressWrapper } from '@xylabs/eth-address'
import { isDefined } from '@xylabs/typeof'
import { useMemo, useSyncExternalStore } from 'react'

import type { EthWalletConnectorBase } from '../../classes/index.ts'

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

export const useCurrentAccount = (ethWalletConnector?: EthWalletConnectorBase): [EthAddressWrapper | undefined, string[]] => {
  const addresses = useCurrentAccountExternal(ethWalletConnector)

  /**
   * According to the metamask docs, the first account is considered their 'selected account'
   *
   * see - https://docs.metamask.io/wallet/how-to/connect/access-accounts/#handle-accounts
   */
  const [currentAddress, additionalAddresses] = useMemo(() => {
    return addresses?.length > 0 ? [EthAddressWrapper.fromString(addresses[0]), addresses.slice(1)] : [undefined, []]
  }, [addresses])

  if (ethWalletConnector?.installed) {
    return [currentAddress, additionalAddresses]
  }
  return [undefined, []]
}
