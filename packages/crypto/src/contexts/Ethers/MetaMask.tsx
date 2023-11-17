import { InfuraProvider, JsonRpcSigner, Listener, Provider, Web3Provider } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { usePromise } from '@xylabs/react-promise'
import React, { Dispatch, PropsWithChildren, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'

import { EthersContext } from './Context'
import { infuraKey } from './Infura'
import { MetaMaskConnector } from './wallets'

const useMetaMaskProviders = (
  metamaskConnector: MetaMaskConnector,
  enabled?: boolean,
  defaultChainId?: number,
): [Provider | undefined, Web3Provider | undefined, string | undefined] => {
  // Establish Meta Mask provider and fallback to Infura
  const [provider, walletProvider, providerName] = useMemo(() => {
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
      return [provider, walletProvider, providerName]
    } else {
      return []
    }
  }, [defaultChainId, enabled, metamaskConnector.provider, metamaskConnector.providerName])

  return [provider, walletProvider, providerName]
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
        signer = provider?.getSigner(metamaskConnector.currentAddress ?? undefined)
      } catch (ex) {
        console.error(ex)
      }
      return signer
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, metamaskConnector.currentAddress, provider, localAddress])
  return signer
}

const useConnectMetaMask = (
  metamaskConnector: MetaMaskConnector,
  setLocalAddress: Dispatch<SetStateAction<EthAddress | undefined>>,
  walletProvider?: Web3Provider,
  enabled?: boolean,
): [() => Promise<string[] | undefined>, boolean, Error | undefined] => {
  const [connectRefused, setConnectRefused] = useState(false)
  const [connectError, setConnectError] = useState<Error>()

  const connect = useCallback(async () => {
    try {
      const accounts = await walletProvider?.send('eth_requestAccounts', [])
      setConnectRefused(false)
      // We could have multiple accounts. Check for one.
      if (accounts && accounts?.length !== 0) {
        console.log('Connected: ', accounts[0])
      } else {
        console.log('No authorized account found.')
      }
      return accounts
    } catch (e) {
      console.log(e)
      setConnectError(e as Error)
      if ((e as { code: number }).code === 4001) setConnectRefused(true)
    }
  }, [walletProvider])

  // watch for changes
  useEffect(() => {
    const accountsChangedListener: Listener = (accounts: string[]) => {
      setConnectError(undefined)
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
  }, [enabled, metamaskConnector, setLocalAddress])

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

  const [localAddress, setLocalAddress] = useState<EthAddress>()

  // Setup logic to put existing selected address into state
  useEffect(() => {
    const currentAddress = metamaskConnector.currentAddress ?? undefined
    if (currentAddress !== localAddress?.toString()) {
      setLocalAddress(EthAddress.fromString(metamaskConnector.currentAddress ?? undefined))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [provider, walletProvider, providerName] = useMetaMaskProviders(metamaskConnector, enabled, defaultChainId)

  const signer = useSigner(metamaskConnector, enabled, walletProvider, localAddress)

  const [connect, connectRefused, error] = useConnectMetaMask(metamaskConnector, setLocalAddress, walletProvider, enabled)

  const chainId = useChainId(metamaskConnector, enabled)

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
