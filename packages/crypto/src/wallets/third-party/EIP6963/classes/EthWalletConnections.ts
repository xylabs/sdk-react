import { isString } from '@xylabs/typeof'
import { BrowserProvider } from 'ethers'

import { isEIP6963AnnounceProviderEvent } from '../../../eip/index.ts'
import { EIP6963Connector } from './EIP6963Connector.ts'
import type { DiscoveredWallets } from './types/index.ts'

export type WalletListener = () => void

export class EthWalletConnections {
  private discoveredWallets: DiscoveredWallets = {}
  private listeners: WalletListener[] = []

  constructor() {
    this.setupListeners()
  }

  addWallet(wallet: EIP6963Connector) {
    const walletName = wallet.providerInfo?.rdns
    if (isString(walletName) && !this.discoveredWallets[walletName]) {
      this.discoveredWallets = {
        [walletName]: wallet,
        ...this.discoveredWallets,
      }
      this.emitChange()
    }
  }

  onDestroy() {
    // eslint-disable-next-line unicorn/no-invalid-remove-event-listener
    globalThis.removeEventListener('eip6963:announceProvider', this.newWalletListener.bind(this))
  }

  removeWallet(wallet: EIP6963Connector) {
    const walletName = wallet.providerInfo?.rdns
    if (isString(walletName) && this.discoveredWallets[walletName]) {
      delete this.discoveredWallets[walletName]
      this.discoveredWallets = { ...this.discoveredWallets }
      this.emitChange()
    }
  }

  subscribe(listener: WalletListener) {
    this.listeners = [...this.listeners, listener]
    return () => {
      this.listeners = this.listeners.filter(existingListener => existingListener !== listener)
    }
  }

  wallets() {
    return this.discoveredWallets
  }

  private emitChange() {
    for (const listener of this.listeners) {
      listener()
    }
  }

  private newWalletListener(event: Event) {
    if (isEIP6963AnnounceProviderEvent(event)) {
      const { info, provider } = event.detail
      // capture installed wallets as they come in
      this.addWallet(new EIP6963Connector(new BrowserProvider(provider), provider, info))
    }
  }

  private setupListeners() {
    // listen when providers announce themselves
    globalThis.addEventListener('eip6963:announceProvider', this.newWalletListener.bind(this))

    // dispatch an event to ask all installed providers to identify themselves
    globalThis.dispatchEvent(new Event('eip6963:requestProvider'))
  }
}
