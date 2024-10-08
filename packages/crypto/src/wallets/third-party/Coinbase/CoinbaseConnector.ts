import { forget } from '@xylabs/forget'
import { BrowserProvider } from 'ethers'

import { EthWalletConnectorBase } from '../classes/index.ts'
import type { CoinbaseProvider } from './lib/index.ts'

const PROVIDER_NAME = 'Coinbase'

export class CoinbaseConnector extends EthWalletConnectorBase {
  // Name of the Provider
  providerName = PROVIDER_NAME

  private ethereum = globalThis.ethereum as CoinbaseProvider | undefined

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'], undefined, PROVIDER_NAME)
    this.init(provider)
  }

  get installed() {
    return !!(this.ethereum && this.ethereum.isCoinbaseWallet)
  }

  init(provider?: BrowserProvider) {
    if (provider) {
      this.provider = provider
    } else if (globalThis.ethereum) {
      this.provider = new BrowserProvider(globalThis.ethereum)
    } else {
      console.warn(`Attempting to use ${this.providerName} class when its not installed`)
    }
    if (this.installed) {
      forget(this.onAccountsChangedListener())
      forget(this.onChainChangedListener())
    }
  }
}
