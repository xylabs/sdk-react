import { useSyncExternalStore } from 'react'

import { EthWalletConnections } from '../../../third-party/index.ts'

let ethWalletConnections: EthWalletConnections | undefined

export const useWalletDiscovery = () => {
  if (!ethWalletConnections) ethWalletConnections = new EthWalletConnections()

  return useSyncExternalStore(ethWalletConnections.subscribe.bind(ethWalletConnections), ethWalletConnections.wallets.bind(ethWalletConnections))
}
