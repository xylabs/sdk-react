import { Signer } from '@ethersproject/abstract-signer'
import { Provider } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'
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
  signer?: Signer | null
  signerAddress?: string
  /** @deprecated - use the provider property and do not rely on wallet specific version */
  walletProvider?: Provider | null
}

export const EthersContext = createContext<EthersData>({})
