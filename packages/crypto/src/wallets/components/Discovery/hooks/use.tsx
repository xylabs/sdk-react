import { useSyncExternalStore } from 'react'

import { EthWalletConnections } from '../../../classes'

const ethWalletConnections = new EthWalletConnections()

export const useWalletDiscovery = () => {
  return useSyncExternalStore(ethWalletConnections.subscribe.bind(ethWalletConnections), ethWalletConnections.wallets.bind(ethWalletConnections))
}
