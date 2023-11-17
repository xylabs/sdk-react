import { ExternalProvider, Listener, Web3Provider } from '@ethersproject/providers'
import { MetaMaskInpageProvider } from '@metamask/providers'

import { EthWalletConnectorBase } from './lib'

export class MetaMaskConnector extends EthWalletConnectorBase {
  // current address enabled in metamask
  public allowedAddresses: string[] = []

  // Listeners that only want to be notified when chainId changes
  public chainChangedNotifiers: Listener[] = []

  // current chainId
  public chainId: string | undefined = undefined

  // instance of provider with Meta Mask specific methods
  public override ethereum = window.ethereum as MetaMaskInpageProvider

  // instance of Ethers Web3Provider
  public override provider: Web3Provider

  // Name of the Provider
  public providerName = 'Meta Mask'

  // listeners for provider events
  private listeners: Listener[] = []

  constructor(provider?: Web3Provider) {
    super(['EIP-1193'])
    if (provider) {
      this.provider = provider
    } else {
      this.provider = new Web3Provider(window.ethereum as ExternalProvider)
    }
    this.onAccountsChangedListener()
    this.onChainChangedListener()
  }

  get installed() {
    return this.ethereum && this.ethereum.isMetaMask
  }

  get signer() {
    return this.provider.getSigner()
  }

  async connectWallet() {
    if (!this.provider) {
      this.logProviderMissing()
      return
    }

    return await this.provider.send('eth_requestAccounts', [])
  }

  async currentAddress(): Promise<string[] | undefined> {
    return await this.provider?.send('eth_accounts', [])
  }

  async currentChainId() {
    return await this.provider?.send('net_version', [])
  }

  async requestAccounts(): Promise<string[] | null> {
    if (!this.provider) {
      this.logProviderMissing()
      return null
    }

    return await this.provider.send('eth_requestAccounts', [])
  }

  async signMessage(message: string) {
    if (!this.provider) {
      this.logProviderMissing()
      return
    }

    const signer = this.provider.getSigner()
    await signer.getAddress()
    const signature = await signer.signMessage(message)
    return signature
  }

  async signerAddress() {
    return await this.provider.getSigner().getAddress()
  }

  public subscribeToChainChanges(listener: () => void) {
    this.chainChangedNotifiers = [listener, ...this.chainChangedNotifiers]
    return () => {
      this.chainChangedNotifiers = this.chainChangedNotifiers.filter((l) => l !== listener)
    }
  }

  async walletConnected() {
    if (await this.currentAddress()) {
      return true
    }
    return false
  }

  /** Web3Provider Listeners - https://docs.ethers.org/v5/api/providers/provider/#Provider--events */
  web3ProviderOn(event: string, listener: Listener) {
    this.provider?.on(event, listener)
    this.listeners.push(listener)
  }

  web3ProviderRemoveListener(event: string, listener: Listener) {
    this.provider?.removeListener(event, listener)
    this.listeners = this.listeners.filter((savedListener) => listener !== savedListener)
  }

  web3ProviderRemoveListeners() {
    this.provider?.removeAllListeners()
  }

  private logProviderMissing() {
    console.warn('Cannot call this method because there is no web3 provider connected.  Please confirm that metamask is installed')
  }

  /**
   * Keep class state internally consistent
   */
  private async onAccountsChangedListener() {
    this.allowedAddresses = (await this.currentAddress()) ?? []
    const listener = (accounts: string[]) => {
      this.allowedAddresses = accounts
    }
    this.onAccountsChanged(listener)
  }

  /**
   * Keep class state internally consistent
   */
  private async onChainChangedListener() {
    this.chainId = (await this.currentChainId()) ?? undefined
    const listener = (chainId: string | undefined) => {
      this.chainId = chainId
      this.chainChangedNotifiers.forEach((listener) => listener())
    }
    this.onChainChanged(listener)
  }
}
