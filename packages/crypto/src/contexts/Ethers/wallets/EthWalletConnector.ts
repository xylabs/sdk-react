import { JsonRpcSigner, Listener, Web3Provider } from '@ethersproject/providers'

/**
 * Base interface for wallet state and interaction
 */
export interface EthWalletBase {
  allowedAddresses: string[]
  chainId: number | undefined
  installed: boolean
  provider?: Web3Provider
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
  currentAddress(): Promise<string[] | undefined>
  currentChainId(): Promise<string | number | null>
  signerFromAddress(address?: string): JsonRpcSigner
  subscribeToAddressChanges?(listener: () => void): () => void
  subscribeToChainChanges?(listener: () => void): () => void
  web3ProviderOn?(event: string, listener: Listener): void
  web3ProviderRemoveListener?(event: string, listener: Listener): void
  web3ProviderRemoveListeners?(): void
}
