import { EthAddressWrapper } from '@xylabs/eth-address'
import { isArray } from '@xylabs/typeof'
import { useMemo, useSyncExternalStore } from 'react'

import type { EthWalletConnectorBase } from '../classes/index.ts'

/**
 * Subscribe to account changes from a given wallet
 *
 * Note: Its easier for ethWalletConnector to be defined to avoid complex method signatures for subscribe function
 **/
export const useCurrentAccountExternal = (ethWalletConnector: EthWalletConnectorBase) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => ethWalletConnector?.allowedAccounts,
      subscribe: (notifier: () => void) => ethWalletConnector?.subscribeToAccountsChanges(notifier),
    }
  }, [ethWalletConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}

export const useCurrentAccount = (ethWalletConnector: EthWalletConnectorBase): [EthAddressWrapper | undefined, string[]] => {
  const addresses = useCurrentAccountExternal(ethWalletConnector)

  /**
   * According to the metamask docs, the first account is considered their 'selected account'
   *
   * see - https://docs.metamask.io/wallet/how-to/connect/access-accounts/#handle-accounts
   */
  const [currentAddress, additionalAddresses] = useMemo(() => {
    return addresses?.length > 0 ? [EthAddressWrapper.fromString(addresses[0]), addresses.slice(1)] : [undefined, []]
  }, [addresses])

  if (ethWalletConnector.installed) {
    return [currentAddress, additionalAddresses]
  }
  return [undefined, []]
}
