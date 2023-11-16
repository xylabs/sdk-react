import { Web3Provider } from '@ethersproject/providers'
import { Promisable } from '@xylabs/promise'

import { EIP1193Provider } from './EIP1193'
import { EIP1193Events } from './EIP1193Events'
import { SupportedEventProposals } from './SupportedEvents'

/**
 * Base class for connecting to an ethereum compatible wallet
 */
export abstract class EthWalletConnectorBase extends EIP1193Events<EIP1193Provider> {
  abstract ethereum: unknown
  abstract provider: Web3Provider
  abstract providerName: string

  constructor(supportedEvents?: SupportedEventProposals[]) {
    super(supportedEvents)
  }

  abstract get chainId(): Promisable<string | number | null>
  abstract get currentAccount(): string | null
  abstract get installed(): boolean
  abstract get walletConnected(): boolean

  abstract connectWallet(): Promise<void>
}
