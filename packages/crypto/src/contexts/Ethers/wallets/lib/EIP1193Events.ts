import { Listener } from '@ethersproject/providers'

import { EIP1193EventNames, EIP1193EventsCompatible, EIP1193Provider } from './EIP1193'
import { SupportedEventProposals } from './SupportedEvents'

/**
 * A zero dependency class that provides functionality for handling EIP1193 events
 *
 * See - https://eips.ethereum.org/EIPS/eip-1193
 */
export class EIP1193Events<TProvider extends EIP1193Provider> implements EIP1193EventsCompatible {
  private eventsEnabled: boolean = false
  // Not relying on an ethers provider because it doesn't have types for EIP-1193 events
  private listeningProvider = window.ethereum as TProvider
  private providerListeners: [event: EIP1193EventNames, listener: Listener][] = []

  constructor(supportedEvents?: SupportedEventProposals[]) {
    this.eventsEnabled = !!supportedEvents?.includes('EIP-1193')
  }

  onAccountsChanged(listener: Listener) {
    this.enabled(() => {
      this.listeningProvider?.on('accountsChanged', listener)
      this.providerListeners.push(['accountsChanged', listener])
    })
  }

  onChainChanged(listener: Listener) {
    this.enabled(() => {
      this.listeningProvider?.on('chainChanged', listener)
      this.providerListeners.push(['chainChanged', listener])
    })
  }

  onConnect(listener: Listener) {
    this.enabled(() => {
      this.listeningProvider?.on('connect', listener)
      this.providerListeners.push(['connect', listener])
    })
  }

  onDisconnect(listener: Listener) {
    this.enabled(() => {
      this.listeningProvider?.on('disconnect', listener)
      this.providerListeners.push(['disconnect', listener])
    })
  }

  removeEIP11193Listener(event: EIP1193EventNames, listener: Listener) {
    this.enabled(() => {
      this.listeningProvider?.removeListener(event, listener)
      this.providerListeners = this.providerListeners.filter(([, savedListener]) => listener !== savedListener)
    })
  }

  removeEIP11193Listeners() {
    this.providerListeners.forEach(([event, listener]) => this.listeningProvider?.removeListener(event, listener))
  }

  private enabled(method?: () => void) {
    if (this.eventsEnabled) {
      method?.()
    } else {
      console.warn('EIP1193 events not enabled')
    }
  }
}
