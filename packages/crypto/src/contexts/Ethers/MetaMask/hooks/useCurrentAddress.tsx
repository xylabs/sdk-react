import { EthAddress } from '@xylabs/eth-address'
import { useMemo, useSyncExternalStore } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useCurrentAddressExternal = (metamaskConnector: MetaMaskConnector) => {
  const { getSnapShot, subscribe } = useMemo(() => {
    return {
      getSnapShot: () => metamaskConnector.allowedAddresses,
      subscribe: (notifier: () => void) => metamaskConnector.subscribeToAddressChanges(notifier),
    }
  }, [metamaskConnector])

  return useSyncExternalStore(subscribe, getSnapShot)
}

export const useCurrentAddress = (metamaskConnector: MetaMaskConnector): [EthAddress | undefined, string[]] => {
  const addresses = useCurrentAddressExternal(metamaskConnector)

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
