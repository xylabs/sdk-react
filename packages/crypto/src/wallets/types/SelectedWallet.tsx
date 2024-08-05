import { BrowserProvider, Eip1193Provider } from 'ethers'

import { EIP6963ProviderInfo } from '../lib/index.ts'

export interface SelectedWallet {
  info: EIP6963ProviderInfo
  provider: BrowserProvider
  rawProvider: Eip1193Provider
}
