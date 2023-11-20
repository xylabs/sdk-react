import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'

import { EIP1193Provider } from './EIP1193'
import { EIP1193Events } from './EIP1193Events'
import { SupportedEventProposals } from './SupportedEvents'

export interface EthWalletConnector {
  allowedAddresses: string[]
  chainId: number | undefined
  installed: boolean
  provider?: Web3Provider
  providerName?: string
  connectWallet(): Promise<void>
  currentAddress(): Promise<string[] | undefined>
  currentChainId(): Promise<string | number | null>
  signMessage(message: string, address?: string): Promise<string | undefined>
  signerFromAddress(address?: string): JsonRpcSigner
  walletConnected(): Promise<boolean>
}

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
  abstract walletConnected(): Promise<boolean>
}
