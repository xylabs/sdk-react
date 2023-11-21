import { EthWallet } from '../../EthWallet'
import { useEthWallet } from '../../hooks'
import { PhantomConnector } from './PhantomConnector'

const phantomConnector = new PhantomConnector()

export const usePhantomWallet = (): EthWallet => {
  return useEthWallet(phantomConnector)
}
