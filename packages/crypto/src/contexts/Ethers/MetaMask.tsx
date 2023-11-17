import { InfuraProvider, JsonRpcSigner, Listener, Provider, Web3Provider } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { usePromise } from '@xylabs/react-promise'
import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'

import { EthersContext } from './Context'
import { infuraKey } from './Infura'
import { MetaMaskConnector } from './wallets'

const useMetaMaskProviders = (
  metamaskConnector: MetaMaskConnector,
  enabled?: boolean,
  chainId?: number,
): [Provider | undefined, Web3Provider | undefined, string | undefined] => {
  // Establish a provider from window or fallback to infura provider - should all wallet connector contexts do that?
  const [provider, walletProvider, providerName] = useMemo(() => {
    if (enabled) {
      const walletProvider = metamaskConnector.provider
      let provider = null
      let providerName = null
      if (walletProvider) {
        provider = walletProvider
        providerName = metamaskConnector.providerName
      } else {
        provider = new InfuraProvider(chainId, infuraKey)
        providerName = 'Infura (Default)'
      }
      provider = walletProvider ?? provider
      return [provider, walletProvider, providerName]
    } else {
      return []
    }
  }, [chainId, enabled, metamaskConnector.provider, metamaskConnector.providerName])

  return [provider, walletProvider, providerName]
}

const useCurrentAddress = (metamaskConnector: MetaMaskConnector, enabled?: boolean) => {
  const [currentAddress, setCurrentAddress] = useState<EthAddress>()

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      const defaultAddress = await metamaskConnector.currentAddress()
      setCurrentAddress((currentAddress) => (currentAddress === undefined && defaultAddress ? defaultAddress : undefined))
    },
    [metamaskConnector],
  )

  // watch for changes
  useEffect(() => {
    const accountsChangedListener: Listener = (accounts: string[]) => {
      // setConnectError(undefined)
      if (accounts.length > 0) {
        setCurrentAddress(EthAddress.fromString(accounts[0]))
      } else {
        setCurrentAddress(undefined)
      }
    }

    if (metamaskConnector) {
      metamaskConnector.onAccountsChanged(accountsChangedListener)
    }

    return () => {
      metamaskConnector.removeEIP11193Listener('accountsChanged', accountsChangedListener)
    }
  }, [enabled, metamaskConnector])

  return currentAddress
}

const useSigner = (
  metamaskConnector: MetaMaskConnector,
  enabled?: boolean,
  provider?: Web3Provider,
  localAddress?: EthAddress,
): JsonRpcSigner | null | undefined => {
  const signer = useMemo(() => {
    if (enabled) {
      let signer = null
      try {
        signer = provider?.getSigner(localAddress?.toString())
      } catch (ex) {
        console.error(ex)
      }
      return signer
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, metamaskConnector.currentAddress, provider, localAddress])
  return signer
}

const useConnectMetaMask = (walletProvider?: Web3Provider): [() => Promise<string[] | undefined>, boolean, Error | undefined] => {
  const [connectRefused, setConnectRefused] = useState(false)
  const [connectError, setConnectError] = useState<Error>()

  const connect = useCallback(async () => {
    try {
      const accounts = await walletProvider?.send('eth_requestAccounts', [])
      setConnectRefused(false)
      setConnectError(undefined)
      // We could have multiple accounts. Check for one.
      if (accounts && accounts?.length !== 0) {
        console.log('Connected: ', accounts[0])
      } else {
        console.log('No authorized account found.')
      }
      return accounts
    } catch (e) {
      setConnectError(e as Error)
      if ((e as { code: number }).code === 4001) setConnectRefused(true)
    }
  }, [walletProvider])

  return [connect, connectRefused, connectError]
}

const useChainId = (metamaskConnector: MetaMaskConnector, enabled?: boolean) => {
  const [chainId, setChainId] = useState<number>()
  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      const currentChainId = await metamaskConnector.chainId()
      setChainId((existingChainId) => (existingChainId === undefined ? currentChainId : existingChainId))

      const chainChangedListener: Listener = (chainIdHex: number) => {
        if (chainId) {
          setChainId(Number(chainIdHex))
        } else {
          setChainId(undefined)
        }
      }

      metamaskConnector.onChainChanged(chainChangedListener)

      return () => {
        metamaskConnector.removeEIP11193Listener('chainChanged', chainChangedListener)
      }
    },
    [enabled, metamaskConnector, chainId],
  )

  return chainId
}

export interface Props {
  defaultChainId?: number
  enabled?: boolean
}

export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children, defaultChainId = 1, enabled = true }) => {
  const [metamaskConnector] = useState<MetaMaskConnector>(new MetaMaskConnector())

  const currentAddress = useCurrentAddress(metamaskConnector, enabled)

  const chainId = useChainId(metamaskConnector, enabled)

  const [provider, walletProvider, providerName] = useMetaMaskProviders(metamaskConnector, enabled, chainId ?? defaultChainId)

  const [connect, connectRefused, connectError] = useConnectMetaMask(walletProvider)

  const signer = useSigner(metamaskConnector, enabled, walletProvider, currentAddress)
  const [signerAddress] = usePromise(async () => await signer?.getAddress(), [signer])

  return (
    <EthersContext.Provider
      value={{
        busy: false,
        chainId,
        connect,
        connectRefused,
        error: connectError,
        isConnected: !!currentAddress,
        localAddress: currentAddress,
        provider,
        providerName,
        signer,
        signerAddress,
        walletProvider,
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
