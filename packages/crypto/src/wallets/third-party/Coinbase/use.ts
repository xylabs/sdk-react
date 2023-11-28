import { useEthWallet } from '../../hooks'
import { EthWallet } from '../../types'
import { CoinbaseConnector } from './CoinbaseConnector'

const coinbaseConnector = new CoinbaseConnector()

export const useCoinbaseWallet = (): EthWallet => {
  return useEthWallet(coinbaseConnector)
}
