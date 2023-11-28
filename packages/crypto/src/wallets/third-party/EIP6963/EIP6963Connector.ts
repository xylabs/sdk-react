import { BrowserProvider, Eip1193Provider } from 'ethers'

import { EthWalletConnectorBase } from '../../EthWalletConnectorBase'
import { EIP6963ProviderInfo } from '../../lib'

/**
 * A generic connector for EIP-6963 compatible wallets
 *
 * see - https://eips.ethereum.org/EIPS/eip-6963
 */
export class EIP6963Connector extends EthWalletConnectorBase {
  // Name of the Provider
  public providerName = ''

  constructor(provider?: BrowserProvider, rawProvider?: Eip1193Provider, info?: EIP6963ProviderInfo) {
    super(['EIP-1193'], rawProvider)
    this.init(provider, info)
  }

  get installed() {
    return !!this.provider
  }

  init(provider?: BrowserProvider, info?: EIP6963ProviderInfo) {
    this.providerName = info?.name ?? ''
    this.provider = provider
    if (this.installed) {
      this.onAccountsChangedListener()
      this.onChainChangedListener()
    }
  }
}
