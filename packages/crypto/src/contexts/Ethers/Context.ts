import { EthAddress } from '@xylabs/eth-address'
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { createContext } from 'react'

export interface EthersData {
  busy?: boolean
  chainId?: number
  connect?: () => Promise<string[] | null | undefined>
  connectError?: Error
  connectRefused?: boolean
  error?: Error
  isConnected?: boolean
  localAddress?: EthAddress
  provider?: BrowserProvider
  providerName?: string
  showConnectWalletDialog?: () => void
  signMessage?: (message: string, address?: string) => Promise<string | undefined>
  signer?: JsonRpcSigner
  signerAddress?: string
  /** @deprecated - use the provider property and do not rely on wallet specific version */
  walletProvider?: BrowserProvider
}

/** @deprecated - get provider and wallet info from wallet hooks */
export const EthersContext = createContext<EthersData>({})
