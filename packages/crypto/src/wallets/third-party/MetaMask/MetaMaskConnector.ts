import { MetaMaskInpageProvider } from '@metamask/providers'
import { BrowserProvider } from 'ethers'

import { EthWalletConnectorBase } from '../../classes'

export class MetaMaskConnector extends EthWalletConnectorBase {
  // Name of the Provider
  public providerName = 'Meta Mask'

  private ethereum = window.ethereum as MetaMaskInpageProvider | undefined

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'])
    this.init(provider)
  }

  get installed() {
    // Phantom camps on the isMetaMask method as well :(
    return !!(this.ethereum && this.ethereum.isMetaMask && !window.phantom?.ethereum.isPhantom)
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
