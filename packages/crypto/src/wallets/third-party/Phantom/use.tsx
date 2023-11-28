import { useEthWallet } from '../../hooks'
import { EthWallet } from '../../types'
import { PhantomConnector } from './PhantomConnector'

const phantomConnector = new PhantomConnector()

export const usePhantomWallet = (): EthWallet => {
  return useEthWallet(phantomConnector)
}
