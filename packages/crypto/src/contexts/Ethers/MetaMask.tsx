import { InfuraProvider, JsonRpcSigner, Listener, Provider, Web3Provider } from '@ethersproject/providers'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { usePromise } from '@xylabs/react-promise'
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'

import { EthersContext } from './Context'
import { infuraKey } from './Infura'
import { MetaMaskConnector } from './wallets'

const ethereum = window.ethereum as MetaMaskInpageProvider

export interface Props {
  enabled?: boolean
}

export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children, enabled = true }) => {
  const [metamaskConnector] = useState<MetaMaskConnector>(new MetaMaskConnector())
  const [error, setError] = useState<Error>()
  const [resetCount, setResetCount] = useState(0)

  const [isConnected, setIsConnected] = useState<boolean>()

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
        provider = new InfuraProvider(1, infuraKey)
        providerName = 'Infura (Default)'
      }
      provider = walletProvider ?? provider
      setProvider(provider)
      setProviderName(providerName)
      setWalletProvider(walletProvider)
      let signer = null
      try {
        signer = provider?.getSigner()
      } catch (ex) {
        console.error(ex)
      }
      setSigner(signer)
    }
  }, [isConnected, enabled, metamaskConnector])

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
          setIsConnected(true)
        } catch (ex) {
          setError(Error(`localAddress: ${ex}`))
          setLocalAddress(undefined)
          setIsConnected(false)
        }
      }
    },
    [signer, resetCount, enabled],
  )

  const connect = useCallback(async () => {
    const accounts = await walletProvider?.send('eth_requestAccounts', [])
    // We could have multiple accounts. Check for one.
    if (accounts && accounts?.length !== 0) {
      setLocalAddress(accounts[0])
      console.log('Connected: ', accounts[0])
    } else {
      console.log('No authorized account found.')
    }
    return accounts
  }, [walletProvider])

  useEffect(() => {
    const accountsChangedListener: Listener = (accounts: string[]) => {
      setResetCount(resetCount + 1)
      setError(undefined)
      if (accounts.length > 0) {
        setLocalAddress(EthAddress.fromString(accounts[0]))
      } else {
        setLocalAddress(undefined)
      }
    }

    if (provider && enabled) {
      ethereum.on('accountsChanged', accountsChangedListener)
    }

    return () => {
      if (window.ethereum) {
        ethereum.off('accountsChanged', accountsChangedListener)
      }
    }
  }, [provider, resetCount, enabled])

  // Chain Id
  const [chainId] = usePromise(async () => await metamaskConnector.chainId(), [metamaskConnector])

  return (
    <EthersContext.Provider
      value={{
        busy: false,
        chainId,
        connect,
        error,
        isConnected: metamaskConnector.walletConnected,
        localAddress,
        provider: metamaskConnector.provider,
        providerName,
        signer: metamaskConnector.signer || signer,
        walletProvider,
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
