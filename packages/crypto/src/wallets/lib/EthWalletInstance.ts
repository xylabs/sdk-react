import { assertEx } from '@xylabs/assert'
import type { Hex } from '@xylabs/hex'

import type { EthWalletConnectorBase } from '../third-party/index.ts'
import type { EthWalletApi } from '../types/index.ts'

export class EthWalletInstance implements EthWalletApi {
  private _ethWalletConnector: EthWalletConnectorBase

  constructor(ethWalletConnector: EthWalletConnectorBase) {
    this._ethWalletConnector = ethWalletConnector
  }

  get ethWalletConnector() {
    return this._ethWalletConnector
  }

  async switchEthereumChain(chainId?: Hex) {
    const walletChainId = assertEx(this.ethWalletConnector.chainId, () => 'No chainId connected')
    if (walletChainId !== Number(chainId)) {
      const eip1193Provider = assertEx(globalThis.ethereum, () => 'No ethereum provider found on window')
      await eip1193Provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      })
    }
  }
}
