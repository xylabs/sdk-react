import { EthWallet } from '../../EthWallet'
import { useEthWallet } from '../../hooks'
import { CoinbaseConnector } from './CoinbaseConnector'

const coinbaseConnector = new CoinbaseConnector()

export const useCoinbaseWallet = (): EthWallet => {
  return useEthWallet(coinbaseConnector)
}
