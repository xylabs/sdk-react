import type { MetaMaskInpageProvider } from '@metamask/providers'
import { forget } from '@xylabs/forget'
import { BrowserProvider } from 'ethers/providers'

import { EthWalletConnectorBase } from '../../classes/index.ts'

const PROVIDER_NAME = 'MetaMask'

export class MetaMaskConnector extends EthWalletConnectorBase {
  // Name of the Provider
  providerName = 'MetaMask'

  private ethereum = globalThis.ethereum as MetaMaskInpageProvider | undefined

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'], undefined, PROVIDER_NAME)
    this.init(provider)
  }

  get installed() {
    // Phantom camps on the isMetaMask method as well :(
    return !!(this.ethereum && this.ethereum.isMetaMask && !globalThis.phantom?.ethereum?.isPhantom)
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
