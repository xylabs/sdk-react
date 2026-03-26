import type { Listener } from 'ethers/utils'

export type EIP1193EventNames = 'connect' | 'disconnect' | 'accountsChanged' | 'chainChanged'

export interface EIP1193EventsCompatible {
  onAccountsChanged: (listener: Listener) => void
  onChainChanged: (listener: Listener) => void
  onConnect: (listener: Listener) => void
  onDisconnect: (listener: Listener) => void
  removeEIP11193Listener?: (event: EIP1193EventNames, listener: Listener) => void
  removeEIP11193Listeners?: () => void
}
