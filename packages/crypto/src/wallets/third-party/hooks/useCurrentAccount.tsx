import { EthAddress } from '@xylabs/eth-address'
import { useMemo, useSyncExternalStore } from 'react'

import { EthWalletConnectorBase } from '../classes/index.js'

/**
 * Subscribe to account changes from a given wallet
 *
 * Note: Its easier for ethWalletConnector to be defined to avoid complex method signatures for subscribe function
 **/
export const useCurrentAccountExternal = (ethWalletConnector: EthWalletConnectorBase) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => ethWalletConnector.allowedAccounts,
      subscribe: (notifier: () => void) => ethWalletConnector?.subscribeToAccountsChanges(notifier),
    }
  }, [ethWalletConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}

export const useCurrentAccount = (ethWalletConnector: EthWalletConnectorBase): [EthAddress | undefined, string[]] => {
  const addresses = useCurrentAccountExternal(ethWalletConnector)

  /**
   * According to the metamask docs, the first account is considered their 'selected account'
   *
   * see - https://docs.metamask.io/wallet/how-to/connect/access-accounts/#handle-accounts
   */
  const [currentAddress, additionalAddresses] = useMemo(() => {
    return addresses && addresses.length > 0 ? [EthAddress.fromString(addresses[0]), addresses.slice(1, addresses.length)] : [undefined, []]
  }, [addresses])

  if (ethWalletConnector.installed) {
    return [currentAddress, additionalAddresses]
  }
  return [undefined, []]
}
