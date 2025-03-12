import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import type { JsonRpcSigner } from 'ethers'
import { BrowserProvider, InfuraProvider } from 'ethers'
import type { PropsWithChildren } from 'react'
import React, { useMemo, useState } from 'react'

import { EthersContext } from './Context.ts'
import { infuraKey } from './Infura/index.ts'

interface Props {
  enabled?: boolean
}

export const MyEtherWalletEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = globalThis as any
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

  const [walletProvider, setWalletProvider] = useState<BrowserProvider>()
  const [provider, setProvider] = useState<BrowserProvider>()
  const [signer, setSigner] = useState<JsonRpcSigner>()

  useAsyncEffect(
    async () => {
      const walletProvider = ethereum ? new BrowserProvider(ethereum) : undefined
      let provider = null
      let providerName = null
      if (walletProvider) {
        provider = walletProvider
        providerName = 'MyEtherWallet'
      } else {
        provider = new InfuraProvider(1, infuraKey)
        providerName = 'Infura (Default)'
      }
      setProvider(provider as BrowserProvider)
      setProviderName(providerName)
      setWalletProvider(walletProvider)
      let signer: JsonRpcSigner | undefined
      try {
        const [existingAddress]: string[] = (await provider.send('eth_accounts', [])) ?? []
        setLocalAddress(EthAddress.fromString(existingAddress[0]))
        if (localAddress) {
          signer = await walletProvider?.getSigner()
        }
      } catch (ex) {
        console.error(ex)
      }
      setSigner(signer)
    },
    [ethereum, isConnected, localAddress],
  )

  useAsyncEffect(
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
            setError(new Error(`localAddress: ${ex}`))
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
    async (isMounted) => {
      const chainId = (await provider?.getNetwork())?.chainId
      if (!isMounted()) return
      setChainId(Number(chainId?.toString()))
    },
    [provider],
  )

  const value = useMemo(() => ({
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
  }), [,
    chainId,
    connect,
    error,
    isConnected,
    localAddress,
    provider,
    providerName,
    isConnected,
    signer,
    walletProvider])

  return (
    <EthersContext
      value={value}
    >
      {children}
    </EthersContext>
  )
}
