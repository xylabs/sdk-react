import { InfuraProvider, JsonRpcSigner, Provider, Web3Provider } from '@ethersproject/providers'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { useAsyncEffect } from '@xylabs/react-shared'
import { EthAddress } from '@xylabs/sdk-js'
import React, { PropsWithChildren, useEffect, useState } from 'react'

import { EthersContext } from './Context'
import { infuraKey } from './Infura'

interface Props {
  enabled?: boolean
}

export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, enabled = true } = props

  const ethereum = window.ethereum as MetaMaskInpageProvider
  const [error, setError] = useState<Error>()
  const [localAddress, setLocalAddress] = useState<EthAddress>()
  const [resetCount, setResetCount] = useState(0)
  const [providerName, setProviderName] = useState<string>()

  const connect = async () => {
    const accounts = await walletProvider?.send('eth_requestAccounts', [])
    // We could have multiple accounts. Check for one.
    if (accounts.length !== 0) {
      setLocalAddress(accounts[0])
      console.log('Connected: ', accounts[0])
    } else {
      console.log('No authorized account found.')
    }
    return accounts
  }

  const [isConnected, setIsConnected] = useState<boolean>()

  const [walletProvider, setWalletProvider] = useState<Web3Provider | null>()
  const [provider, setProvider] = useState<Provider>()
  const [signer, setSigner] = useState<JsonRpcSigner | null>()

  useEffect(() => {
    if (provider && enabled) {
      provider.on('accountsChanged', (accounts: string[]) => {
        console.log(`accountsChanged: ${JSON.stringify(accounts)}`)
        setResetCount(resetCount + 1)
        if (accounts.length > 0) {
          setLocalAddress(EthAddress.fromString(accounts[0]))
        } else {
          setLocalAddress(undefined)
        }
      })
      provider.on('chainChanged', (chainId: string) => {
        setResetCount(resetCount + 1)
        if (chainId) {
          setChainId(parseInt(chainId))
        } else {
          setChainId(undefined)
        }
      })
    }
  }, [provider, resetCount, enabled])

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
  }, [ethereum, isConnected, enabled])

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (isMounted) => {
      if (signer && enabled) {
        try {
          const localAddress = EthAddress.fromString(await signer.getAddress())
          console.log(`Setting Local Address: ${localAddress}`)
          if (isMounted()) {
            setLocalAddress(localAddress)
            setIsConnected(true)
          }
        } catch (ex) {
          if (isMounted()) {
            setError(Error(`localAddress: ${ex}`))
            setLocalAddress(undefined)
            setIsConnected(false)
          }
        }
      }
    },
    [signer, resetCount, enabled],
  )

  const [chainId, setChainId] = useState<number>()
  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (isMounted) => {
      if (enabled) {
        const chainId = (await provider?.getNetwork())?.chainId
        if (!isMounted()) return
        setChainId(chainId)
      }
    },
    [provider, enabled],
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
