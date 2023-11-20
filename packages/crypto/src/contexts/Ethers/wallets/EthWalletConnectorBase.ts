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

  subscribeToAddressChanges?(listener: () => void): () => void
  subscribeToChainChanges?(listener: () => void): () => void

  web3ProviderOn?(event: string, listener: Listener): void
  web3ProviderRemoveListener?(event: string, listener: Listener): void
  web3ProviderRemoveListeners?(): void

  abstract connectWallet(): Promise<void>

  abstract currentAddress(): Promise<string[] | undefined>
  abstract currentChainId(): Promise<string | number | null>

  abstract requestAccounts(): Promise<string[] | null>

  abstract signMessage(message: string, address?: string): Promise<string | undefined>
  abstract signerFromAddress(address?: string): Promise<JsonRpcSigner>
}
