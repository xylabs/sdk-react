import type { EIP6963Connector } from '../EIP6963Connector.ts'

export interface DiscoveredWallets {
  [rdns: string]: EIP6963Connector
}
