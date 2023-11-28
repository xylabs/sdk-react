import { BrowserProvider } from 'ethers'

import { EthWalletConnectorBase } from '../../classes'
import { TrustProvider } from './lib'

export class TrustConnector extends EthWalletConnectorBase {
  // Name of the Provider
  public providerName = 'Trust'

  // instance of provider with Trust specific methods
  private ethereum = window.ethereum as TrustProvider | undefined

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'])
    this.init(provider)
  }

  get installed() {
    return !!(this.ethereum && this.ethereum.isTrust)
  }

  init(provider?: BrowserProvider) {
    if (provider) {
      this.provider = provider
    } else if (window.ethereum) {
      this.provider = new BrowserProvider(window.ethereum)
    } else {
      console.warn(`Attempting to use ${this.providerName} class when its not installed`)
    }
    if (this.installed) {
      this.onAccountsChangedListener()
      this.onChainChangedListener()
    }
  }
}
