import { BrowserProvider, Eip1193Provider } from 'ethers'

import { EthWalletConnectorBase } from '../../classes'

export class PhantomConnector extends EthWalletConnectorBase {
  // Name of the Provider
  public providerName = 'Phantom'

  private ethereum = window.phantom?.ethereum

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'])
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
      this.onAccountsChangedListener()
      this.onChainChangedListener()
    }
  }
}
