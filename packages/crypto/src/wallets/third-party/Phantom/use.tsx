import { EthWallet } from '../../types'
import { useEthWallet } from '../hooks'
import { PhantomConnector } from './PhantomConnector'

let phantomConnector: PhantomConnector | undefined

export const usePhantomWallet = (): EthWallet => {
  if (!phantomConnector) phantomConnector = new PhantomConnector()

  return useEthWallet(phantomConnector)
}
