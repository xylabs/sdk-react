import { EthWallet } from '../../EthWallet'
import { useEthWallet } from '../../hooks'
import { MetaMaskConnector } from './MetaMaskConnector'

const metamaskConnector = new MetaMaskConnector()

export const useMetaMask = (): EthWallet => {
  return useEthWallet(metamaskConnector)
}
