import { useEthWallet } from '../../hooks/index.ts'
import type { EthWallet } from '../../types/index.ts'
import { MetaMaskConnector } from './MetaMaskConnector.ts'

let metamaskConnector: MetaMaskConnector | undefined

export const useMetaMask = (): EthWallet => {
  if (!metamaskConnector) metamaskConnector = new MetaMaskConnector()

  return useEthWallet(metamaskConnector)
}
