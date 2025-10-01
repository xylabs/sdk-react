import type { BrowserProvider, Eip1193Provider } from 'ethers/providers'

import type { EIP6963ProviderInfo } from '../eip/index.ts'

export interface SelectedWallet {
  info: EIP6963ProviderInfo
  provider: BrowserProvider
  rawProvider: Eip1193Provider
}
