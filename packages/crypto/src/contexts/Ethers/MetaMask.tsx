import { InfuraProvider, JsonRpcSigner, Listener, Provider, Web3Provider } from '@ethersproject/providers'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'

import { EthersContext } from './Context'
import { infuraKey } from './Infura'

const ethereum = window.ethereum as MetaMaskInpageProvider

export interface Props {
  enabled?: boolean
}

export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children, enabled = true }) => {
  const [error, setError] = useState<Error>()
  const [resetCount, setResetCount] = useState(0)

  const [isConnected, setIsConnected] = useState<boolean>()

  // Provider/Signer
  const [provider, setProvider] = useState<Provider>()
  const [walletProvider, setWalletProvider] = useState<Web3Provider | null>()
  const [providerName, setProviderName] = useState<string>()
  const [signer, setSigner] = useState<JsonRpcSigner | null>()
  useEffect(() => {
    if (enabled) {
      const walletProvider = ethereum ? new Web3Provider(window.ethereum) : null
      let provider = null
      let providerName = null
      if (walletProvider) {
        provider = walletProvider
        providerName = 'Meta Mask'
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
        signer = walletProvider?.getSigner()
      } catch (ex) {
        console.error(ex)
      }
      setSigner(signer)
    }
  }, [isConnected, enabled])

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
  const [chainId, setChainId] = useState<number>()
  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      // try to grab chain id without connecting
      const chainId = (await provider?.getNetwork())?.chainId
      setChainId(chainId)

      const chainChangedListener: Listener = (chainId: string) => {
        setResetCount(resetCount + 1)
        if (chainId) {
          setChainId(parseInt(chainId))
        } else {
          setChainId(undefined)
        }
      }

      if (enabled && ethereum) {
        ethereum.on('chainChanged', chainChangedListener)
      }

      return () => {
        if (ethereum) {
          ethereum.off('chainChanged', chainChangedListener)
        }
      }
    },
    [provider, enabled, resetCount],
  )

  return (
    <EthersContext.Provider
      value={{
        busy: false,
        chainId,
        connect,
        error,
        isConnected,
        localAddress,
        provider,
        providerName,
        signer: isConnected ? signer : undefined,
        walletProvider,
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
