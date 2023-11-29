import { EthWallet } from '../../types'
import { useEthWallet } from '../hooks'
import { TrustConnector } from './TrustConnector'

const trustConnector = new TrustConnector()

export const useTrustWallet = (): EthWallet => {
  return useEthWallet(trustConnector)
}
