import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { BrowserProvider, InfuraProvider, JsonRpcSigner, Provider } from 'ethers'
import React, { PropsWithChildren, useState } from 'react'

import { EthersContext } from './Context'
import { infuraKey } from './Infura'

interface Props {
  enabled?: boolean
}

export const MyEtherWalletEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = window as any
  const ethereum = global.ethereum
  const [error, setError] = useState<Error>()
  const [localAddress, setLocalAddress] = useState<EthAddress>()
  const [providerName, setProviderName] = useState<string>()

  if (ethereum) {
    ethereum.autoRefreshOnNetworkChange = false
  }

  const connect = async () => {
    await global.ethereum?.enable()
    return localAddress ? [localAddress.toString()] : []
  }

  const [isConnected, setIsConnected] = useState<boolean>()

  const [walletProvider, setWalletProvider] = useState<BrowserProvider | null>()
  const [provider, setProvider] = useState<Provider>()
  const [signer, setSigner] = useState<JsonRpcSigner | null>()

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      const walletProvider = ethereum ? new BrowserProvider(ethereum) : null
      let provider = null
      let providerName = null
      if (walletProvider) {
        provider = walletProvider
        providerName = 'MyEtherWallet'
      } else {
        provider = new InfuraProvider(1, infuraKey)
        providerName = 'Infura (Default)'
      }
      setProvider(provider)
      setProviderName(providerName)
      setWalletProvider(walletProvider)
      let signer: JsonRpcSigner | null = null
      try {
        const [existingAddress]: string[] = (await provider.send('eth_accounts', [])) ?? []
        setLocalAddress(EthAddress.fromString(existingAddress[0]))
        if (localAddress) {
          signer = (await walletProvider?.getSigner()) ?? null
        }
      } catch (ex) {
        console.error(ex)
      }
      setSigner(signer)
    },
    [ethereum, isConnected, localAddress],
  )

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (isMounted) => {
      if (signer) {
        try {
          const localAddress = EthAddress.fromString(await signer.getAddress())
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
    [signer],
  )

  const [chainId, setChainId] = useState<number>()

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (isMounted) => {
      const chainId = (await provider?.getNetwork())?.chainId
      if (!isMounted()) return
      setChainId(Number(chainId?.toString()))
    },
    [provider],
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
