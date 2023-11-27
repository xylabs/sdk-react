import { EIP6963ProviderDetail } from './EIP6963'

export interface DiscoveredWallets {
  [rdns: string]: EIP6963ProviderDetail
}
