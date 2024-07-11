import { EthWallet } from '../../types/index.js'
import { useEthWallet } from '../hooks/index.js'
import { TrustConnector } from './TrustConnector.js'

let trustConnector: TrustConnector | undefined

export const useTrustWallet = (): EthWallet => {
  if (!trustConnector) trustConnector = new TrustConnector()

  return useEthWallet(trustConnector)
}
