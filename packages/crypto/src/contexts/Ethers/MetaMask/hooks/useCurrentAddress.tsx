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

  const [currentAddress, additionalAddresses] = useMemo(
    () => [EthAddress.fromString(addresses[0]), addresses.slice(0, addresses.length)],
    [addresses],
  )

  return [currentAddress, additionalAddresses]
}
