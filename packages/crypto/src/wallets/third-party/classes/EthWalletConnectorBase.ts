import { BrowserProvider, Eip1193Provider, Listener } from 'ethers'

import { AccountsChangedEventDetails, AccountsChangedEventName, ChainChangedEventDetails, ChainChangedEventName } from '../../events'
import { EIP1193Events, EIP6963ProviderInfo, SupportedEventProposals } from '../../lib'
import { findChainName } from '../../utils'

/**
 * Base class for connecting to an ethereum compatible wallet
 */
export abstract class EthWalletConnectorBase extends EIP1193Events {
  // allowed accounts according to the wallet
  allowedAccounts: string[] = []

  // instance of Ethers BrowserProvider
  provider: BrowserProvider | undefined

  // Assets provided by the wallet
  providerInfo: EIP6963ProviderInfo | undefined

  // instance of the raw provider injected by the wallet
  rawProvider: Eip1193Provider | undefined

  // Listeners that only want to be notified when accounts change
  protected accountChangeNotifiers: Listener[] = []

  // Listeners that only want to be notified when chainId changes
  protected chainChangedNotifiers: Listener[] = []

  // current chainId in hex format
  protected chainIdHex: string | undefined = undefined

  // Name of the Provider
  abstract providerName: string

  constructor(supportedEvents?: SupportedEventProposals[], rawProvider?: Eip1193Provider, providerName?: string) {
    super(supportedEvents, rawProvider, providerName)
  }

  get chainId() {
    return this.chainIdHex ? Number(this.chainIdHex) : undefined
  }

  get chainName() {
    return this.chainId ? findChainName(this.chainId).name : undefined
  }

  abstract get installed(): boolean

  async connectWallet() {
    if (!this.provider) {
      this.logProviderMissing()
      return
    }

    return await this.provider.send('eth_requestAccounts', [])
  }

  async currentAccounts(): Promise<string[] | undefined> {
    return await this.provider?.send('eth_accounts', [])
  }

  async currentChainId() {
    return await this.provider?.send('net_version', [])
  }

  emitEvent(eventName: string, customEvent: CustomEventInit) {
    window.dispatchEvent(new CustomEvent(eventName, customEvent))
  }

  async signMessage(message: string, allowedAccounts?: string) {
    if (!this.provider) {
      this.logProviderMissing()
      return
    }

    const signer = await this.signerFromAddress(allowedAccounts)
    const signature = await signer?.signMessage(message)
    return signature
  }

  async signerFromAddress(address?: string) {
    return await this.provider?.getSigner(address)
  }

  subscribeToAccountsChanges(listener: () => void) {
    this.accountChangeNotifiers = [listener, ...this.accountChangeNotifiers]
    return () => {
      this.accountChangeNotifiers = this.accountChangeNotifiers.filter((l) => l !== listener)
    }
  }

  subscribeToChainChanges(listener: () => void) {
    this.chainChangedNotifiers = [listener, ...this.chainChangedNotifiers]
    return () => {
      this.chainChangedNotifiers = this.chainChangedNotifiers.filter((l) => l !== listener)
    }
  }

  /**
   * Keep class state internally consistent
   */
  protected async onAccountsChangedListener() {
    // set the initial value
    this.allowedAccounts = (await this.currentAccounts()) ?? []
    // notify existing subscribers that the default was set
    this.accountChangeNotifiers.forEach((listener) => listener())

    const listener = (accounts: string[]) => {
      this.allowedAccounts = accounts
      this.accountChangeNotifiers.forEach((listener) => listener())

      const eventDetails: AccountsChangedEventDetails = {
        detail: { allowedAccounts: accounts, providerName: this.providerName },
      }
      this.emitEvent(AccountsChangedEventName, eventDetails)
    }
    this.onAccountsChanged(listener)
  }

  /**
   * Keep class state internally consistent
   */
  protected async onChainChangedListener() {
    // set the initial value
    this.chainIdHex = (await this.currentChainId()) ?? undefined
    // notify existing subscribers that the default was set
    this.chainChangedNotifiers.forEach((listener) => listener())

    const listener = (chainId: string | undefined) => {
      this.chainIdHex = chainId
      this.chainChangedNotifiers.forEach((listener) => listener())

      const eventDetails: ChainChangedEventDetails = {
        detail: { chainId: this.chainId, providerName: this.providerName },
      }
      this.emitEvent(ChainChangedEventName, eventDetails)
    }
    this.onChainChanged(listener)
  }

  private logProviderMissing() {
    console.warn('Cannot call this method because there is no browser provider connected.  Please confirm that metamask is installed')
  }

  // Since init likely relies on derived class members, derived classes must implement it
  abstract init(provider?: BrowserProvider, info?: EIP6963ProviderInfo): void
}
