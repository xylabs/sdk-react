import { Web3Provider } from '@ethersproject/providers'
import { Promisable } from '@xylabs/promise'

export abstract class EthWalletConnectorBase<TEthereum = Web3Provider> {
  public ethereum = window.ethereum as TEthereum
  public provider: Web3Provider | undefined
  abstract providerName: string

  constructor(provider?: Web3Provider) {
    if (provider) {
      this.provider = provider
    } else if (this.ethereum) {
      this.provider = new Web3Provider(window.ethereum)
    }
  }

  abstract get chainId(): Promisable<string | number | null>
  abstract get currentAccount(): string | null
  abstract get installed(): boolean
  abstract get walletConnected(): boolean

  abstract connectWallet(): Promise<void>
}
