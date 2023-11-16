import { ExternalProvider, Listener } from '@ethersproject/providers'

export type EIP1193EventNames = 'connect' | 'disconnect' | 'accountsChanged' | 'chainChanged'

export interface EIP1193Provider extends ExternalProvider {
  on: (eventName: EIP1193EventNames, listener: Listener) => this
  removeListener: (eventName: EIP1193EventNames, listener: Listener) => this
}
