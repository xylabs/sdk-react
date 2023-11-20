import { BrowserProvider, JsonRpcSigner, Listener } from 'ethers'

import { EthWalletConnector } from './EthWallet'
import { EIP1193Events, SupportedEventProposals } from './lib'

/**
 * Base class for connecting to an ethereum compatible wallet
 */
export abstract class EthWalletConnectorBase extends EIP1193Events implements EthWalletConnector {
  abstract allowedAddresses: string[]
  abstract provider: BrowserProvider
  abstract providerName: string

  constructor(supportedEvents?: SupportedEventProposals[]) {
    super(supportedEvents)
  }

  abstract get chainId(): number | undefined
  abstract get installed(): boolean

  browserProviderOn?(event: string, listener: Listener): void
  browserProviderRemoveListener?(event: string, listener: Listener): void
  browserProviderRemoveListeners?(): void

  subscribeToAddressChanges?(listener: () => void): () => void
  subscribeToChainChanges?(listener: () => void): () => void

  abstract connectWallet(): Promise<void>

  abstract currentAddress(): Promise<string[] | undefined>
  abstract currentChainId(): Promise<string | number | null>

  abstract requestAccounts(): Promise<string[] | null>

  abstract signMessage(message: string, address?: string): Promise<string | undefined>
  abstract signerFromAddress(address?: string): Promise<JsonRpcSigner>
}
