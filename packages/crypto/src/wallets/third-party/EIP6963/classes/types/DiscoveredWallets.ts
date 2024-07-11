import { EIP6963Connector } from '../EIP6963Connector.js'

export interface DiscoveredWallets {
  [rdns: string]: EIP6963Connector
}
