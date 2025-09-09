import type { Hex } from '@xylabs/hex'

import type { EthWallet } from './EthWallet.ts'

/**
 * An extended interface for EthWallet that includes methods to
 * support other EIP proposals that are wallet specific and not
 * supported by an Ethereum Provider (i.e. BrowserProvider) directly.

 */
export interface EthWalletApi extends EthWallet {
  /**
   * Switch the connected chain in the wallet according to EIP-3326
   * See - https://eips.ethereum.org/EIPS/eip-3326
   */
  switchEthereumChain: (chainId: Hex) => Promise<void>
  switchEthereumChainError?: Error
}
