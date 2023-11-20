import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'

export interface EthWalletState {
  allowedAddresses: string[]
  chainId: number | undefined
  installed: boolean
  provider?: Web3Provider
  providerName?: string
}

export interface EthWalletActions {
  connectWallet(): Promise<void>
  signMessage(message: string, address?: string): Promise<string | undefined>
  // TODO - transactions
}

export interface EthWalletConnector extends EthWalletState, EthWalletActions {
  currentAddress(): Promise<string[] | undefined>
  currentChainId(): Promise<string | number | null>
  signerFromAddress(address?: string): JsonRpcSigner
}
