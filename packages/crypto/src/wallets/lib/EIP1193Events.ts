import { BrowserProvider, Listener } from 'ethers'

import { EIP1193EventNames, EIP1193EventsCompatible } from './EIP1193'
import { SupportedEventProposals } from './SupportedEvents'

/**
 * A zero dependency class that provides functionality for handling EIP1193 events
 *
 * See - https://eips.ethereum.org/EIPS/eip-1193
 */
export class EIP1193Events implements EIP1193EventsCompatible {
  // list of EIP-1193 specific event names and listeners for easy cleanup
  private eip1193Listeners: [event: EIP1193EventNames, listener: Listener][] = []

  // opt-in to EIP-1193 events since not all wallets will support them
  private eventsEnabled: boolean = false

  private listeningProvider = window.ethereum as BrowserProvider | undefined

  constructor(supportedEvents?: SupportedEventProposals[]) {
    this.eventsEnabled = !!supportedEvents?.includes('EIP-1193')
    if (window.ethereum === undefined) {
      console.warn('attempting to subscribe to EIP1193 events but window.ethereum is undefined')
    }
  }

  onAccountsChanged(listener: Listener) {
    this.addListener('accountsChanged', listener)
  }

  onChainChanged(listener: Listener) {
    this.addListener('chainChanged', listener)
  }

  onConnect(listener: Listener) {
    this.addListener('connect', listener)
  }

  onDisconnect(listener: Listener) {
    this.addListener('disconnect', listener)
  }

  removeEIP11193Listener(event: EIP1193EventNames, listener: Listener) {
    this.enabled(() => {
      this.listeningProvider?.removeListener(event, listener)
      this.eip1193Listeners = this.eip1193Listeners.filter(([, savedListener]) => listener !== savedListener)
    })
  }

  removeEIP11193Listeners() {
    this.eip1193Listeners.forEach(([event, listener]) => this.listeningProvider?.removeListener(event, listener))
  }

  private addListener(event: EIP1193EventNames, listener: Listener) {
    this.enabled(() => {
      this.listeningProvider?.on(event, listener)
      this.eip1193Listeners.push([event, listener])
    })
  }

  private enabled(method?: () => void) {
    if (this.eventsEnabled) {
      method?.()
    } else {
      console.warn('EIP1193 events not enabled')
    }
  }
}
