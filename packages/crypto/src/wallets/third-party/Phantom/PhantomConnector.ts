import { forget } from '@xylabs/forget'
import { BrowserProvider, Eip1193Provider } from 'ethers'

import { EthWalletConnectorBase } from '../classes/index.ts'

const PROVIDER_NAME = 'Phantom'

export class PhantomConnector extends EthWalletConnectorBase {
  // Name of the Provider
  providerName = PROVIDER_NAME

  private ethereum = window.phantom?.ethereum

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'], undefined, PROVIDER_NAME)
    this.init(provider)
  }

  get installed() {
    return !!(window.phantom && window.phantom.ethereum.isPhantom)
  }

  init(provider?: BrowserProvider) {
    if (provider) {
      this.provider = provider
    } else if (this.ethereum) {
      this.provider = new BrowserProvider(window.ethereum as Eip1193Provider)
    } else {
      console.warn(`Attempting to use ${this.providerName} class when its not installed`)
    }
    if (this.installed) {
      forget(this.onAccountsChangedListener())
      forget(this.onChainChangedListener())
    }
  }
}
