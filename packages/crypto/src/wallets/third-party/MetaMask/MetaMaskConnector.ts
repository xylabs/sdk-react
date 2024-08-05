import { MetaMaskInpageProvider } from '@metamask/providers'
import { forget } from '@xylabs/forget'
import { BrowserProvider } from 'ethers'

import { EthWalletConnectorBase } from '../classes/index.ts'

const PROVIDER_NAME = 'MetaMask'

export class MetaMaskConnector extends EthWalletConnectorBase {
  // Name of the Provider
  providerName = 'MetaMask'

  private ethereum = window.ethereum as MetaMaskInpageProvider | undefined

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'], undefined, PROVIDER_NAME)
    this.init(provider)
  }

  get installed() {
    // Phantom camps on the isMetaMask method as well :(
    return !!(this.ethereum && this.ethereum.isMetaMask && !window.phantom?.ethereum?.isPhantom)
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
      forget(this.onAccountsChangedListener())
      forget(this.onChainChangedListener())
    }
  }
}
