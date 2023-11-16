import { ExternalProvider, Listener, Web3Provider } from '@ethersproject/providers'
import { MetaMaskInpageProvider } from '@metamask/providers'

import { EthWalletConnectorBase } from './lib'

export class MetaMaskConnector extends EthWalletConnectorBase {
  // instance of provider with Meta Mask specific methods
  public override ethereum = window.ethereum as MetaMaskInpageProvider
  // instance of Ethers Web3Provider
  public override provider: Web3Provider

  // Name of the Provider
  public providerName = 'Meta Mask'
  private account = ''

  private listeners: Listener[] = []

  constructor(provider?: Web3Provider) {
    super(['EIP-1193'])
    if (provider) {
      this.provider = provider
    } else {
      this.provider = new Web3Provider(window.ethereum as ExternalProvider)
    }
  }

  get currentAddress() {
    return this.ethereum?.selectedAddress
  }

  get installed() {
    return this.ethereum && this.ethereum.isMetaMask
  }

  get signer() {
    return this.provider.getSigner()
  }

  get walletConnected() {
    if (this.currentAddress) {
      return true
    }
    return false
  }

  async chainId() {
    return await this.provider?.send('net_version', [])
  }

  async connectWallet() {
    if (!this.provider) {
      this.logProviderMissing()
      return
    }

    const accounts = await this.provider.send('eth_requestAccounts', [])
    // We could have multiple accounts. Check for one.
    if (accounts.length !== 0) {
      this.account = accounts[0]
      console.log('Connected: ', this.account)
    } else {
      console.log('No authorized account found.')
    }
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
}
