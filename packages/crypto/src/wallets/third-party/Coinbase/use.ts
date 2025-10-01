import { useEthWallet } from '../../hooks/index.ts'
import type { EthWallet } from '../../types/index.ts'
import { CoinbaseConnector } from './CoinbaseConnector.ts'

let coinbaseConnector: CoinbaseConnector | undefined

export const useCoinbaseWallet = (): EthWallet => {
  if (!coinbaseConnector) coinbaseConnector = new CoinbaseConnector()

  return useEthWallet(coinbaseConnector)
}
