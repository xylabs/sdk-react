import { EthAddress } from '@xylabs/eth-address'
import { BrowserProvider, JsonRpcSigner } from 'ethers'

/**
 * Base interface for wallet state and interaction
 */
export interface EthWallet {
  chainId?: number | undefined
  connectError?: Error
  connectRefused?: boolean
  connectWallet?: () => Promise<string[] | null | undefined>
  currentAccount?: EthAddress
  installed?: boolean
  provider?: BrowserProvider
  providerName?: string
  signMessage?: (message: string, address?: string) => Promise<string | undefined>
  signer?: JsonRpcSigner
  signerAddress?: string
  // TODO - transactions
}
