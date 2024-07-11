import { forget } from '@xylabs/forget'
import { BrowserProvider, Eip1193Provider } from 'ethers'

import { EIP6963ProviderInfo } from '../../../lib/index.js'
import { EthWalletConnectorBase } from '../../classes/index.js'

/**
 * A generic connector for EIP-6963 compatible wallets
 *
 * see - https://eips.ethereum.org/EIPS/eip-6963
 */
export class EIP6963Connector extends EthWalletConnectorBase {
  // Name of the Provider
  providerName = ''

  constructor(provider?: BrowserProvider, rawProvider?: Eip1193Provider, info?: EIP6963ProviderInfo) {
    super(['EIP-1193'], rawProvider, info?.name)
    this.provider = provider
    this.rawProvider = rawProvider
    this.providerInfo = info
    this.providerName = info?.name ?? ''
    this.init()
  }

  get installed() {
    return !!this.provider
  }

  init() {
    if (this.installed) {
      forget(this.onAccountsChangedListener())
      forget(this.onChainChangedListener())
    }
  }
}
