import { BrowserProvider } from 'ethers'

/**
 * Base interface for wallet state and interaction
 */
export interface EthWalletBase {
  allowedAddresses: string[]
  chainId: number | undefined
  installed: boolean
  provider?: BrowserProvider
  providerName?: string
  connectWallet(): Promise<void>
  signMessage(message: string, address?: string): Promise<string | undefined>
  // TODO - transactions
}
