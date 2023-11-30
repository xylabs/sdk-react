import { EthWallet } from '../../types'
import { useEthWallet } from '../hooks'
import { MetaMaskConnector } from './MetaMaskConnector'

let metamaskConnector: MetaMaskConnector | undefined

export const useMetaMask = (): EthWallet => {
  if (!metamaskConnector) metamaskConnector = new MetaMaskConnector()

  return useEthWallet(metamaskConnector)
}
