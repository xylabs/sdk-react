import { EthWallet } from '../../types/index.js'
import { useEthWallet } from '../hooks/index.js'
import { CoinbaseConnector } from './CoinbaseConnector.js'

let coinbaseConnector: CoinbaseConnector | undefined

export const useCoinbaseWallet = (): EthWallet => {
  if (!coinbaseConnector) coinbaseConnector = new CoinbaseConnector()

  return useEthWallet(coinbaseConnector)
}
