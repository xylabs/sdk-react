import { MetaMaskInpageProvider } from '@metamask/providers'
import { BrowserProvider, Listener } from 'ethers'

import { EthWalletConnectorBase } from './EthWalletConnectorBase'

export class MetaMaskConnector extends EthWalletConnectorBase {
  // Name of the Provider
  public providerName = 'Meta Mask'

  // Listeners that only want to be notified when addresses change
  private addressChangeNotifiers: Listener[] = []

  // Listeners that only want to be notified when chainId changes
  private chainChangedNotifiers: Listener[] = []

  // current chainId in hex format
  private chainIdHex: string | undefined = undefined

  // instance of provider with Meta Mask specific methods
  private ethereum = window.ethereum as MetaMaskInpageProvider | undefined

  // listeners for provider events
  private listeners: Listener[] = []

  constructor(provider?: BrowserProvider) {
    super(['EIP-1193'])
    if (provider) {
      this.provider = provider
    } else if (window.ethereum) {
      this.provider = new BrowserProvider(window.ethereum)
    } else {
      throw new Error('Attempting to use metamask class when its not installed')
    }
    this.onAccountsChangedListener()
    this.onChainChangedListener()
  }

  get chainId() {
    return this.chainIdHex ? Number(this.chainIdHex) : undefined
  }

  get installed() {
    return !!(this.ethereum && this.ethereum.isMetaMask)
  }

  /** Provider Listeners - https://docs.ethers.org/v6/api/providers/#ProviderEvent */
  override browserProviderOn(event: string, listener: Listener) {
    this.provider?.on(event, listener)
    this.listeners.push(listener)
  }

  override browserProviderRemoveListener(event: string, listener: Listener) {
    this.provider?.removeListener(event, listener)
    this.listeners = this.listeners.filter((savedListener) => listener !== savedListener)
  }

  override browserProviderRemoveListeners() {
    this.provider?.removeAllListeners()
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

  async signMessage(message: string, address?: string) {
    if (!this.provider) {
      this.logProviderMissing()
      return
    }

    const signer = await this.signerFromAddress(address)
    await signer?.getAddress()
    const signature = await signer?.signMessage(message)
    return signature
  }

  async signerFromAddress(address?: string) {
    return await this.provider?.getSigner(address)
  }

  override subscribeToAddressChanges(listener: () => void) {
    this.addressChangeNotifiers = [listener, ...this.addressChangeNotifiers]
    return () => {
      this.addressChangeNotifiers = this.addressChangeNotifiers.filter((l) => l !== listener)
    }
  }

  override subscribeToChainChanges(listener: () => void) {
    this.chainChangedNotifiers = [listener, ...this.chainChangedNotifiers]
    return () => {
      this.chainChangedNotifiers = this.chainChangedNotifiers.filter((l) => l !== listener)
    }
  }

  private logProviderMissing() {
    console.warn('Cannot call this method because there is no browser provider connected.  Please confirm that metamask is installed')
  }

  /**
   * Keep class state internally consistent
   */
  private async onAccountsChangedListener() {
    // set the initial value
    this.allowedAddresses = (await this.currentAddress()) ?? []
    // notify existing subscribers that the default was set
    this.addressChangeNotifiers.forEach((listener) => listener())

    const listener = (accounts: string[]) => {
      this.allowedAddresses = accounts
      this.addressChangeNotifiers.forEach((listener) => listener())
    }
    this.onAccountsChanged(listener)
  }

  /**
   * Keep class state internally consistent
   */
  private async onChainChangedListener() {
    // set the initial value
    this.chainIdHex = (await this.currentChainId()) ?? undefined
    // notify existing subscribers that the default was set
    this.chainChangedNotifiers.forEach((listener) => listener())

    const listener = (chainId: string | undefined) => {
      this.chainIdHex = chainId
      this.chainChangedNotifiers.forEach((listener) => listener())
    }
    this.onChainChanged(listener)
  }
}
