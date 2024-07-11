import { EthWallet } from '../../types/index.js'
import { useEthWallet } from '../hooks/index.js'
import { PhantomConnector } from './PhantomConnector.js'

let phantomConnector: PhantomConnector | undefined

export const usePhantomWallet = (): EthWallet => {
  if (!phantomConnector) phantomConnector = new PhantomConnector()

  return useEthWallet(phantomConnector)
}
