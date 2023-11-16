import { InfuraProvider, JsonRpcSigner, Listener, Provider, Web3Provider } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { usePromise } from '@xylabs/react-promise'
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'

import { EthersContext } from './Context'
import { infuraKey } from './Infura'
import { MetaMaskConnector } from './wallets'

export interface Props {
  defaultChainId?: number
  enabled?: boolean
}

export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children, defaultChainId = 1, enabled = true }) => {
  const [metamaskConnector] = useState<MetaMaskConnector>(new MetaMaskConnector())
  const [error, setError] = useState<Error>()

  // Provider/Signer - fallback to infura?
  const [provider, setProvider] = useState<Provider>()
  const [walletProvider, setWalletProvider] = useState<Web3Provider | null>()
  const [providerName, setProviderName] = useState<string>()
  const [signer, setSigner] = useState<JsonRpcSigner | null>()
  useEffect(() => {
    if (enabled) {
      const walletProvider = metamaskConnector.provider
      let provider = null
      let providerName = null
      if (walletProvider) {
        provider = walletProvider
        providerName = metamaskConnector.providerName
      } else {
        provider = new InfuraProvider(defaultChainId, infuraKey)
        providerName = 'Infura (Default)'
      }
      provider = walletProvider ?? provider
      setProvider(provider)
      setProviderName(providerName)
      setWalletProvider(walletProvider)
      let signer = null
      try {
        const currentAddress = metamaskConnector.currentAddress ?? undefined
        signer = provider?.getSigner(currentAddress)
      } catch (ex) {
        console.error(ex)
      }
      setSigner(signer)
    }
  }, [defaultChainId, enabled, metamaskConnector])

  // Connectivity and Account / Address
  const [localAddress, setLocalAddress] = useState<EthAddress>()
  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      if (signer && enabled) {
        try {
          const localAddress = EthAddress.fromString(await signer.getAddress())
          console.log(`Setting Local Address: ${localAddress}`)
          setLocalAddress(localAddress)
        } catch (ex) {
          setError(Error(`localAddress: ${ex}`))
          setLocalAddress(undefined)
        }
      }
    },
    [signer, enabled],
  )

  const [connectRefused, setConnectRefused] = useState(false)
  const connect = useCallback(async () => {
    try {
      const accounts = await walletProvider?.send('eth_requestAccounts', [])
      // We could have multiple accounts. Check for one.
      if (accounts && accounts?.length !== 0) {
        setLocalAddress(accounts[0])
        console.log('Connected: ', accounts[0])
      } else {
        console.log('No authorized account found.')
      }
      return accounts
    } catch (e) {
      console.log(e)
      setError(e as Error)
      if ((e as { code: number }).code === 4001) setConnectRefused(true)
    }
  }, [walletProvider])

  useEffect(() => {
    const accountsChangedListener: Listener = (accounts: string[]) => {
      setError(undefined)
      if (accounts.length > 0) {
        setLocalAddress(EthAddress.fromString(accounts[0]))
      } else {
        setLocalAddress(undefined)
      }
    }

    if (metamaskConnector) {
      metamaskConnector.onAccountsChanged(accountsChangedListener)
    }

    return () => {
      metamaskConnector.removeEIP11193Listener('accountsChanged', accountsChangedListener)
    }
  }, [provider, enabled, metamaskConnector])

  // Chain Id
  const [chainId] = usePromise(async () => await metamaskConnector.chainId(), [metamaskConnector])

  // Signer Address
  const [signerAddress] = usePromise(async () => await signer?.getAddress(), [signer])

  return (
    <EthersContext.Provider
      value={{
        busy: false,
        chainId,
        connect,
        connectRefused,
        error,
        isConnected: metamaskConnector.walletConnected,
        localAddress,
        provider: metamaskConnector.provider,
        providerName,
        signer: metamaskConnector.signer || signer,
        signerAddress: signerAddress,
        walletProvider,
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
