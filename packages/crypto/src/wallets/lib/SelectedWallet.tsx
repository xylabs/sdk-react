import { BrowserProvider, Eip1193Provider } from 'ethers'

import { EIP6963ProviderInfo } from './EIP6963'

export interface SelectedWallet {
  info: EIP6963ProviderInfo
  provider: BrowserProvider
  rawProvider: Eip1193Provider
}
