import { useEthWallet } from '../../hooks/index.ts'
import type { EthWallet } from '../../types/index.ts'
import { PhantomConnector } from './PhantomConnector.ts'

let phantomConnector: PhantomConnector | undefined

export const usePhantomWallet = (): EthWallet => {
  if (!phantomConnector) phantomConnector = new PhantomConnector()

  return useEthWallet(phantomConnector)
}
