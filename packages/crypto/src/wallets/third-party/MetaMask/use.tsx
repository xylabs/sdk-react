import { EthWallet } from '../../types/index.js'
import { useEthWallet } from '../hooks/index.js'
import { MetaMaskConnector } from './MetaMaskConnector.js'

let metamaskConnector: MetaMaskConnector | undefined

export const useMetaMask = (): EthWallet => {
  if (!metamaskConnector) metamaskConnector = new MetaMaskConnector()

  return useEthWallet(metamaskConnector)
}
