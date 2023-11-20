import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'

import { EthWalletConnector } from './EthWalletConnector'
import { EIP1193Events, EIP1193Provider, SupportedEventProposals } from './lib'

/**
 * Base class for connecting to an ethereum compatible wallet
 */
export abstract class EthWalletConnectorBase extends EIP1193Events<EIP1193Provider> implements EthWalletConnector {
  abstract allowedAddresses: string[]
  abstract chainId: number | undefined
  abstract ethereum: unknown
  abstract provider: Web3Provider
  abstract providerName: string

  constructor(supportedEvents?: SupportedEventProposals[]) {
    super(supportedEvents)
  }

  abstract get installed(): boolean

  abstract connectWallet(): Promise<void>
  abstract currentAddress(): Promise<string[] | undefined>
  abstract currentChainId(): Promise<string | number | null>
  abstract signMessage(message: string, address?: string): Promise<string | undefined>
  abstract signerFromAddress(address?: string): JsonRpcSigner
}
