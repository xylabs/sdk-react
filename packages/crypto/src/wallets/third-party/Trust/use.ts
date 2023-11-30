import { EthWallet } from '../../types'
import { useEthWallet } from '../hooks'
import { TrustConnector } from './TrustConnector'

let trustConnector: TrustConnector | undefined

export const useTrustWallet = (): EthWallet => {
  if (!trustConnector) trustConnector = new TrustConnector()

  return useEthWallet(trustConnector)
}
