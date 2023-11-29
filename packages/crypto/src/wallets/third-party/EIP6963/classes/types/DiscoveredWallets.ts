import { EIP6963Connector } from '../EIP6963Connector'

export interface DiscoveredWallets {
  [rdns: string]: EIP6963Connector
}
