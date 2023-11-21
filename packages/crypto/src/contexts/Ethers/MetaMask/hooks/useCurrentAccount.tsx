import { EthAddress } from '@xylabs/eth-address'
import { useMemo, useSyncExternalStore } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useCurrentAccountExternal = (metamaskConnector: MetaMaskConnector) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => metamaskConnector.allowedAccounts,
      subscribe: (notifier: () => void) => metamaskConnector.subscribeToAccountsChanges(notifier),
    }
  }, [metamaskConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}

export const useCurrentAccount = (metamaskConnector: MetaMaskConnector): [EthAddress | undefined, string[]] => {
  const addresses = useCurrentAccountExternal(metamaskConnector)

  /**
   * According to the metamask docs, the first account is considered their 'selected account'
   *
   * see - https://docs.metamask.io/wallet/how-to/connect/access-accounts/#handle-accounts
   */
  const [currentAddress, additionalAddresses] = useMemo(
    () => [EthAddress.fromString(addresses[0]), addresses.slice(0, addresses.length)],
    [addresses],
  )

  return [currentAddress, additionalAddresses]
}
