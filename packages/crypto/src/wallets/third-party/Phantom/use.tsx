import { EthWallet } from '../../types'
import { useEthWallet } from '../hooks'
import { PhantomConnector } from './PhantomConnector'

const phantomConnector = new PhantomConnector()

export const usePhantomWallet = (): EthWallet => {
  return useEthWallet(phantomConnector)
}
