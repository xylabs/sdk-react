import { EthWallet } from '../../types'
import { useEthWallet } from '../hooks'
import { CoinbaseConnector } from './CoinbaseConnector'

let coinbaseConnector: CoinbaseConnector | undefined

export const useCoinbaseWallet = (): EthWallet => {
  if (!coinbaseConnector) coinbaseConnector = new CoinbaseConnector()

  return useEthWallet(coinbaseConnector)
}
