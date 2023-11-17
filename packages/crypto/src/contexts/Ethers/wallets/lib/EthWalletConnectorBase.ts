import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'

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

  abstract get installed(): boolean
  abstract get signer(): JsonRpcSigner

  abstract chainId(): Promise<string | number | null>
  abstract connectWallet(): Promise<void>
  abstract currentAddress(): Promise<EthAddress | undefined>
  abstract walletConnected(): Promise<boolean>
}
