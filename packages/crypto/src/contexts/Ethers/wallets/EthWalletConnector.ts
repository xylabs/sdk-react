import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'

export interface EthWallet {
  allowedAddresses: string[]
  chainId: number | undefined
  installed: boolean
  provider?: Web3Provider
  providerName?: string
}

export interface EthWalletConnector extends EthWallet {
  connectWallet(): Promise<void>
  currentAddress(): Promise<string[] | undefined>
  currentChainId(): Promise<string | number | null>
  signMessage(message: string, address?: string): Promise<string | undefined>
  signerFromAddress(address?: string): JsonRpcSigner
  walletConnected(): Promise<boolean>
}
