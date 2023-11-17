import { ExternalProvider, Listener } from '@ethersproject/providers'

export type EIP1193EventNames = 'connect' | 'disconnect' | 'accountsChanged' | 'chainChanged'

export interface EIP1193Provider extends ExternalProvider {
  on: (eventName: EIP1193EventNames, listener: Listener) => this
  removeListener: (eventName: EIP1193EventNames, listener: Listener) => this
}

export interface EIP1193EventsCompatible {
  onAccountsChanged: (listener: Listener) => void
  onChainChanged: (listener: Listener) => void
  onConnect: (listener: Listener) => void
  onDisconnect: (listener: Listener) => void
  removeEIP11193Listener?: (event: EIP1193EventNames, listener: Listener) => void
  removeEIP11193Listeners?: () => void
}
