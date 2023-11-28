import { EthAddress } from '@xylabs/eth-address'
import { useMemo, useSyncExternalStore } from 'react'

import { EthWalletConnectorBase } from '../EthWalletConnectorBase'

export const useCurrentAccountExternal = (ethWalletConnector: EthWalletConnectorBase) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => ethWalletConnector.allowedAccounts,
      subscribe: (notifier: () => void) => ethWalletConnector.subscribeToAccountsChanges(notifier),
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
    if (addresses.length) {
      return [EthAddress.fromString(addresses[0]), addresses.slice(0, addresses.length)]
    } else {
      return [undefined, []]
    }
  }, [addresses])

  if (ethWalletConnector.installed) {
    return [currentAddress, additionalAddresses]
  }
  return [undefined, []]
}
