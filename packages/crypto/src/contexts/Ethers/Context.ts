import { EthAddress } from '@xylabs/eth-address'
import { JsonRpcSigner, Provider } from 'ethers'
import { createContext } from 'react'

export interface EthersData {
  busy?: boolean
  chainId?: number | null
  connect?: () => Promise<string[] | null | undefined>
  connectRefused?: boolean
  error?: Error | null
  isConnected?: boolean
  localAddress?: EthAddress | null
  provider?: Provider | null
  providerName?: string
  showConnectWalletDialog?: () => void
  signMessage?: (message: string, address?: string) => Promise<string | undefined>
  signer?: JsonRpcSigner | null
  signerAddress?: string
  /** @deprecated - use the provider property and do not rely on wallet specific version */
  walletProvider?: Provider | null
}

export const EthersContext = createContext<EthersData>({})
