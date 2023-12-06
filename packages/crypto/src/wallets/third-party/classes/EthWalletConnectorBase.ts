import { BrowserProvider, Eip1193Provider, JsonRpcSigner, Listener } from 'ethers'

import { AccountsChangedEventName, ChainChangedEventName } from '../../events'
import { EIP1193Events, EIP6963ProviderInfo, SupportedEventProposals } from '../../lib'
import { findChainName } from '../../utils'

export interface ProviderErrorLogEntry {
  error: Error
  providerName: string
}

/**
 * Base class for connecting to an ethereum compatible wallet
 */
export abstract class EthWalletConnectorBase extends EIP1193Events {
  // allowed accounts according to the wallet
  allowedAccounts: string[] = []

  // instance of Ethers BrowserProvider
  provider: BrowserProvider | undefined

  providerErrorLog: ProviderErrorLogEntry[] = []

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

  /**
   * Request to enable accounts in the wallet
   */
  async connectWallet(): Promise<string[] | null | undefined> {
    if (!this.provider) {
      this.logProviderMissing()
      return
    }

    return await this.provider.send('eth_requestAccounts', [])
  }

  /**
   * Request the current active allowed from the wallet
   */
  async currentAccounts(): Promise<string[] | undefined> {
    return await this.tryRpcSendCall<string[] | undefined>('eth_accounts')
  }

  /**
   * Request the current chain id selection on the wallet
   */
  async currentChainId() {
    return await this.tryRpcSendCall<string | undefined>('net_version')
  }

  /**
   * Sign a string with a specific account enabled in the wallet
   *
   * @param message Message to sign with the signer
   * @param allowedAccount Account being used to sign the message
   */
  async signMessage(message: string, allowedAccount?: string) {
    if (!this.provider) {
      this.logProviderMissing()
      return
    }

    const signer = await this.signerFromAddress(allowedAccount)
    const signature = await signer?.signMessage(message)
    return signature
  }

  /**
   * Get a signer from a given address
   *
   * @param address Fetch a signer for a given address
   */
  async signerFromAddress(address?: string): Promise<JsonRpcSigner | undefined> {
    return await this.provider?.getSigner(address)
  }

  /**
   * Pass a callback to be notified when accounts are changed
   * Note: This is a notifier so it does not return updated values so check the allowed accounts
   * after the passed listener is invoked
   *
   * @param listener A notify function that will be called when allowed accounts change
   */
  subscribeToAccountsChanges(listener: () => void) {
    this.accountChangeNotifiers = [listener, ...this.accountChangeNotifiers]
    return () => {
      this.accountChangeNotifiers = this.accountChangeNotifiers.filter((l) => l !== listener)
    }
  }

  /**
   * Pass a callback to be notified when chainId is changed
   * Note: This is a notifier so it does not return updated values so check the chainId
   * after the passed listener is invoked
   *
   * @param listener A notify function that will be called when chainId changes
   */
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

    this.notifySubscribers(this.accountChangeNotifiers, AccountsChangedEventName, { allowedAccounts: this.allowedAccounts })

    const listener = (accounts: string[]) => {
      this.allowedAccounts = accounts

      this.notifySubscribers(this.accountChangeNotifiers, AccountsChangedEventName, { allowedAccounts: this.allowedAccounts })
    }
    this.onAccountsChanged(listener)
  }

  /**
   * Keep class state internally consistent
   */
  protected async onChainChangedListener() {
    // set the initial value
    this.chainIdHex = (await this.currentChainId()) ?? undefined

    this.notifySubscribers(this.chainChangedNotifiers, ChainChangedEventName, { chainId: this.chainId })

    const listener = (chainId: string | undefined) => {
      this.chainIdHex = chainId

      this.notifySubscribers(this.chainChangedNotifiers, ChainChangedEventName, { chainId: this.chainId })
    }
    this.onChainChanged(listener)
  }

  private logProviderErrors(error: Error) {
    this.providerErrorLog.push({ error, providerName: this.providerName })
  }

  private logProviderMissing() {
    console.warn('Cannot call this method because there is no browser provider connected.  Please confirm that metamask is installed')
  }

  private notifySubscribers(listeners: Listener[], eventName: string, value: { [key: string]: unknown }) {
    listeners.forEach((listener) => listener())

    const details = {
      detail: { ...value, providerName: this.providerName },
    }

    // Allow anyone to listen for changes
    window.dispatchEvent(new CustomEvent(eventName, details))
  }

  private async tryRpcSendCall<TReturn = unknown>(method: string, params = []): Promise<TReturn | undefined> {
    try {
      const result = await this.provider?.send(method, params)
      return result as TReturn
    } catch (e) {
      console.warn(`Error calling ${method} from ${this.providerName}`, e)
      this.logProviderErrors(e as Error)
    }
  }

  // Since init likely relies on derived class members, derived classes must implement it
  abstract init(provider?: BrowserProvider, info?: EIP6963ProviderInfo): void
}
