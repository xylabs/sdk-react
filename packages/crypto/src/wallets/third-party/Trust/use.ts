import { EthWallet } from '../../types/index.ts'
import { useEthWallet } from '../hooks/index.ts'
import { TrustConnector } from './TrustConnector.ts'

let trustConnector: TrustConnector | undefined

export const useTrustWallet = (): EthWallet => {
  if (!trustConnector) trustConnector = new TrustConnector()

  return useEthWallet(trustConnector)
}
