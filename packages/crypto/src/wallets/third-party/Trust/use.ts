import { useEthWallet } from '../../hooks'
import { EthWallet } from '../../types'
import { TrustConnector } from './TrustConnector'

const trustConnector = new TrustConnector()

export const useTrustWallet = (): EthWallet => {
  return useEthWallet(trustConnector)
}
