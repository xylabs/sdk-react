import { EIP6963Connector } from '../../../third-party'

export interface DiscoveredWallets {
  [rdns: string]: EIP6963Connector
}
