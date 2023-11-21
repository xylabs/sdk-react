import { BrowserProvider } from 'ethers'

import { EthWalletConnectorBase } from '../../EthWalletConnectorBase'
import { CoinbaseProvider } from './lib'

export class CoinbaseConnector extends EthWalletConnectorBase {
  // Name of the Provider
  public providerName = 'Coinbase'

  // instance of provider with Meta Mask specific methods
  private ethereum = window.ethereum as CoinbaseProvider | undefined

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'])
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

  get installed() {
    return !!(this.ethereum && this.ethereum.isCoinbaseWallet)
  }
}
