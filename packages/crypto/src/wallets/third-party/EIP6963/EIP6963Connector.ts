import { BrowserProvider } from 'ethers'

import { EthWalletConnectorBase } from '../../EthWalletConnectorBase'
import { EIP6963ProviderInfo } from '../../lib'

export class EIP6963Connector extends EthWalletConnectorBase {
  // Name of the Provider
  public providerName = ''

  constructor(provider?: BrowserProvider, info?: EIP6963ProviderInfo) {
    super(['EIP-1193'])
    this.init(provider, info)
  }

  get installed() {
    return !!this.provider
  }

  init(provider?: BrowserProvider, info?: EIP6963ProviderInfo) {
    if (!provider) {
      console.warn(`Attempting to use ${this.providerName} class when its not installed`)
    }
    this.providerName = info?.name ?? ''
    this.provider = provider
    if (this.installed) {
      this.onAccountsChangedListener()
      this.onChainChangedListener()
    }
  }
}
