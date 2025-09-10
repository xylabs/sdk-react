import type { EthWalletConnectorBase } from '../../classes/index.ts'
import { useEthWallet } from './useEthWallet.tsx'
import { useEthWalletApiInstance } from './useEthWalletApiInstance.ts'

export const useEthWalletInstance = (connector: EthWalletConnectorBase) => {
  const ethWalletApiInstance = useEthWalletApiInstance(connector)
  const ethWallet = useEthWallet(connector)

  return {
    ...ethWalletApiInstance,
    ...ethWallet,
  }
}
