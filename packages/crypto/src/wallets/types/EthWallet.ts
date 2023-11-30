import { EthAddress } from '@xylabs/eth-address'
import { BrowserProvider, JsonRpcSigner } from 'ethers'

import { EIP6963ProviderInfo } from '../lib'

/**
 * Base interface for wallet state and interaction
 */
export interface EthWallet {
  additionalAccounts?: string[]
  chainId?: number
  chainName?: string
  connectError?: Error
  connectRefused?: boolean
  connectWallet?: () => Promise<string[] | null | undefined>
  currentAccount?: EthAddress
  installed?: boolean
  provider?: BrowserProvider
  providerInfo?: EIP6963ProviderInfo
  providerName?: string
  signMessage?: (message: string, address?: string) => Promise<string | undefined>
  signer?: JsonRpcSigner
  signerAddress?: EthAddress
  // TODO - transactions
}
