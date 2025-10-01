import { forget } from '@xylabs/forget'
import { BrowserProvider } from 'ethers/providers'

import { EthWalletConnectorBase } from '../../classes/index.ts'
import type { TrustProvider } from './lib/index.ts'

export class TrustConnector extends EthWalletConnectorBase {
  // Name of the Provider
  providerName = 'Trust'

  // instance of provider with Trust specific methods
  private ethereum = globalThis.ethereum as TrustProvider | undefined

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
