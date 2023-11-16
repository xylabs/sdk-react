import { InfuraProvider, Listener } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { usePromise } from '@xylabs/react-promise'
import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'

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

  const [localAddress, setLocalAddress] = useState<EthAddress>()

  // Setup logic to put existing selected address into state
  useEffect(() => {
    const currentAddress = metamaskConnector.currentAddress ?? undefined
    if (currentAddress !== localAddress?.toString()) {
      setLocalAddress(EthAddress.fromString(metamaskConnector.currentAddress ?? undefined))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Provider/Signer - fallback to infura?
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

  const [connectRefused, setConnectRefused] = useState(false)
  const connect = useCallback(async () => {
    try {
      const accounts = await walletProvider?.send('eth_requestAccounts', [])
      setConnectRefused(false)
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
  }, [enabled, metamaskConnector])

  // Chain Id
  const [chainId, setChainId] = useState<number>()
  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      const currentChainId = await metamaskConnector.chainId()
      setChainId((existingChainId) => (existingChainId === undefined ? currentChainId : existingChainId))

      const chainChangedListener: Listener = (chainId: number) => {
        setError(undefined)
        if (chainId) {
          setChainId(chainId)
        } else {
          setChainId(undefined)
        }
      }

      metamaskConnector.onChainChanged(chainChangedListener)

      return () => {
        metamaskConnector.removeEIP11193Listener('chainChanged', chainChangedListener)
      }
    },
    [provider, enabled, metamaskConnector, chainId],
  )

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
