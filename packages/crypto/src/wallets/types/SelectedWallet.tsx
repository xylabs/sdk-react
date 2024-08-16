import type { BrowserProvider, Eip1193Provider } from 'ethers'

import type { EIP6963ProviderInfo } from '../lib/index.ts'

export interface SelectedWallet {
  info: EIP6963ProviderInfo
  provider: BrowserProvider
  rawProvider: Eip1193Provider
}
