import { Listener } from '@ethersproject/providers'

import { EIP1193EventNames, EIP1193Provider } from './EIP1193'

/**
 * A zero dependency class that provides functionality for handling EIP1193 events
 *
 * See - https://eips.ethereum.org/EIPS/eip-1193
 */
export class EIP1193Events<TProvider extends EIP1193Provider> {
  private listeningProvider = window.ethereum as TProvider
  private providerListeners: [event: EIP1193EventNames, listener: Listener][] = []

  onAccountsChanged(listener: Listener) {
    this.listeningProvider?.on('accountsChanged', listener)
    this.providerListeners.push(['accountsChanged', listener])
  }

  onChainChanged(listener: Listener) {
    this.listeningProvider?.on('chainChanged', listener)
    this.providerListeners.push(['chainChanged', listener])
  }

  onConnect(listener: Listener) {
    this.listeningProvider?.on('connect', listener)
    this.providerListeners.push(['connect', listener])
  }

  onDisconnect(listener: Listener) {
    this.listeningProvider?.on('disconnect', listener)
    this.providerListeners.push(['disconnect', listener])
  }

  removeEIP11193Listener(event: EIP1193EventNames, listener: Listener) {
    this.listeningProvider?.removeListener(event, listener)
    this.providerListeners = this.providerListeners.filter(([, savedListener]) => listener !== savedListener)
  }

  removeEIP11193Listeners() {
    this.providerListeners.forEach(([event, listener]) => this.listeningProvider?.removeListener(event, listener))
  }
}
