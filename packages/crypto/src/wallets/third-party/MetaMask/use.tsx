import { useEthWallet } from '../../hooks'
import { EthWallet } from '../../types'
import { MetaMaskConnector } from './MetaMaskConnector'

const metamaskConnector = new MetaMaskConnector()

export const useMetaMask = (): EthWallet => {
  return useEthWallet(metamaskConnector)
}
