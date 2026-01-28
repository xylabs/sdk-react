import type { Hex } from '@xylabs/sdk-js'

/**
 * An interface that includes methods defined in other EIP proposals that are wallet
 * specific and not supported by an Ethereum Provider (i.e. BrowserProvider) directly.
 */
export interface EthWalletApi {
  /**
   * Switch the connected chain in the wallet according to EIP-3326
   * See - https://eips.ethereum.org/EIPS/eip-3326
   */
  switchEthereumChain: (chainId: Hex) => Promise<void>
  switchEthereumChainError?: Error
}
