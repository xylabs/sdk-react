import { EIP6963ProviderDetail } from '../../../lib'

export interface DiscoveredWallets {
  [rdns: string]: EIP6963ProviderDetail
}
