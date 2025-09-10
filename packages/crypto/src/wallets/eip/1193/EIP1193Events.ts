import { forget } from '@xylabs/forget'
import type {
  BrowserProvider, Eip1193Provider, Listener,
} from 'ethers'

import type { SupportedEventProposals } from '../SupportedEvents.ts'
import type { EIP1193EventNames, EIP1193EventsCompatible } from './EIP1193.ts'

/**
 * A zero dependency class that provides functionality for handling EIP1193 events
 *
 * See - https://eips.ethereum.org/EIPS/eip-1193
 */
export abstract class EIP1193Events implements EIP1193EventsCompatible {
  // helpful for crafting debug/error messages to know the injected wallet
  _providerName: string | undefined

  // list of EIP-1193 specific event names and listeners for easy cleanup
  private eip1193Listeners: [event: EIP1193EventNames, listener: Listener][] = []

  // opt-in to EIP-1193 events since not all wallets will support them
  private eventsEnabled = false

  private listeningProvider: BrowserProvider | undefined

  constructor(supportedEvents?: SupportedEventProposals[], provider?: Eip1193Provider, providerName?: string) {
    this._providerName = providerName
    this.eventsEnabled = !!supportedEvents?.includes('EIP-1193')
    if (globalThis.ethereum === undefined && provider === undefined) {
      console.warn('attempting to subscribe to EIP1193 events but missing provider in arguments or at window.ethereum')
    }
    this.listeningProvider = (provider ?? globalThis.ethereum) as unknown as BrowserProvider | undefined
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
      forget<BrowserProvider | void>(this.listeningProvider?.removeListener(event, listener) ?? Promise.resolve())
      this.eip1193Listeners = this.eip1193Listeners.filter(([, savedListener]) => listener !== savedListener)
    })
  }

  removeEIP11193Listeners() {
    for (const [event, listener] of this.eip1193Listeners) {
      forget<BrowserProvider | void>(this.listeningProvider?.removeListener(event, listener) ?? Promise.resolve())
    }
  }

  private addListener(event: EIP1193EventNames, listener: Listener) {
    this.enabled(() => {
      forget<BrowserProvider | void>(this.listeningProvider?.on(event, listener) ?? Promise.resolve())
      this.eip1193Listeners.push([event, listener])
    })
  }

  private enabled(method?: () => void) {
    if (this.eventsEnabled) {
      method?.()
    }
  }
}
