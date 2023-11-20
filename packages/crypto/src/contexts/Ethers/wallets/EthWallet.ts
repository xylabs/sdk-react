import { BrowserProvider, JsonRpcSigner, Listener } from 'ethers'

/**
 * Base interface for wallet state and interaction
 */
export interface EthWalletBase {
  allowedAddresses: string[]
  chainId: number | undefined
  installed: boolean
  provider?: BrowserProvider
  providerName?: string
  connectWallet(): Promise<void>
  signMessage(message: string, address?: string): Promise<string | undefined>
  // TODO - transactions
}

/**
 * Connector interface for wallets implementations
 *
 * Extension of the base wallet functionality to add more provider specific methods
 */
export interface EthWalletConnector extends EthWalletBase {
  browserProviderOn?(event: string, listener: Listener): void
  browserProviderRemoveListener?(event: string, listener: Listener): void
  browserProviderRemoveListeners?(): void
  currentAddress(): Promise<string[] | undefined>
  currentChainId(): Promise<string | number | null>
  signerFromAddress(address?: string): Promise<JsonRpcSigner>
  subscribeToAddressChanges?(listener: () => void): () => void
  subscribeToChainChanges?(listener: () => void): () => void
}
