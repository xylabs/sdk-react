import { BrowserProvider } from 'ethers'

import { EthWalletConnectorBase } from '../classes'
import { CoinbaseProvider } from './lib'

const PROVIDER_NAME = 'Coinbase'

export class CoinbaseConnector extends EthWalletConnectorBase {
  // Name of the Provider
  providerName = PROVIDER_NAME

  private ethereum = window.ethereum as CoinbaseProvider | undefined

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
