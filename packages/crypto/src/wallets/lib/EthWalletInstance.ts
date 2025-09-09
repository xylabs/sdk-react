import { assertEx } from '@xylabs/assert'
import type { Hex } from '@xylabs/hex'
import { isDefined } from '@xylabs/typeof'

import type { EthWalletConnectorBase } from '../third-party/index.ts'
import type { EthWalletApi } from '../types/index.ts'

export class EthWalletInstance implements EthWalletApi {
  private _ethWalletConnector: EthWalletConnectorBase
  private onError?: (error: Error) => void

  constructor(
    ethWalletConnector: EthWalletConnectorBase,
    onError?: (error: Error) => void,
  ) {
    this._ethWalletConnector = ethWalletConnector
    this.onError = onError
  }

  get ethWalletConnector() {
    return this._ethWalletConnector
  }

  async switchEthereumChain(chainId?: Hex) {
    try {
      const walletChainId = assertEx(this.ethWalletConnector.chainId, () => 'No chainId connected')
      if (walletChainId !== Number(chainId)) {
        const eip1193Provider = assertEx(globalThis.ethereum, () => 'No ethereum provider found on window')
        await eip1193Provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId }],
        })
      }
    } catch (e) {
      console.error('Error switching chain', e)
      if (isDefined(this.onError)) {
        this.onError(e as Error)
      } else {
        throw e
      }
    }
  }
}
