import { assertEx } from '@xylabs/assert'
import type { Hex } from '@xylabs/hex'
import type { EIP1193Provider } from 'viem'

import type { EthWalletConnectorBase } from '../classes/index.ts'
import type { EthWalletApi } from '../types/index.ts'

/**
 * A wrapper for the Ethereum wallet connection that adds functionality that is not
 * supported by the provider interface directly.
 *
 * Metamask in particular supports many `wallet_*` rpc calls have their own EIP-* proposal.
 * See - https://docs.metamask.io/wallet/reference/json-rpc-methods/
 *
 * @param connector An instance of EthWalletConnectorBase
 */
export class EthWalletApiInstance implements EthWalletApi {
  private _ethWalletConnector: EthWalletConnectorBase

  constructor(ethWalletConnector: EthWalletConnectorBase) {
    this._ethWalletConnector = ethWalletConnector
  }

  private get eip1193Provider(): EIP1193Provider {
    return assertEx('request' in (this.ethWalletConnector.provider || {})
      ? this.ethWalletConnector.provider as unknown as EIP1193Provider
      : null, () => 'Provider does not support request method')
  }

  private get ethWalletConnector() {
    return this._ethWalletConnector
  }

  async switchEthereumChain(chainId: Hex) {
    assertEx(this.ethWalletConnector.chainId, () => 'No chainId connected')
    assertEx(chainId, () => 'No chainId provided')

    if (this.ethWalletConnector.chainId !== Number(chainId)) {
      await this.eip1193Provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      })
    }
  }
}
