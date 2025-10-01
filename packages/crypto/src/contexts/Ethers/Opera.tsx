import { EthAddressWrapper } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import type { JsonRpcSigner } from 'ethers/providers'
import { BrowserProvider } from 'ethers/providers'
import type { PropsWithChildren } from 'react'
import React, { useMemo, useState } from 'react'

import { EthersContext } from './Context.ts'

interface Props {
  enabled?: boolean
}

export const OperaEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = globalThis as any
  const ethereum = global.ethereum
  const [error, setError] = useState<Error>()
  const [signer, setSigner] = useState<JsonRpcSigner>()
  const [provider, setProvider] = useState<BrowserProvider>()
  const [localAddress, setLocalAddress] = useState<EthAddressWrapper | undefined>(
    (global.ethereum?.addresses?.length ?? 0) > 0 ? EthAddressWrapper.fromString(global.ethereum?.addresses?.[0]) : undefined,
  )

  const chainId = ethereum?.chainId ? Number.parseInt(ethereum?.chainId) : 1
  const isConnected = ethereum?.isConnected() ?? false

  useAsyncEffect(
    async (mounted) => {
      if (ethereum) {
        ethereum.enable()
        const operaProvider = new BrowserProvider(ethereum)
        const provider = operaProvider
        const [existingAddress]: string[] = (await provider.send('eth_accounts', [])) ?? []
        if (existingAddress !== localAddress?.toString()) setLocalAddress(EthAddressWrapper.fromString(existingAddress))
        if (localAddress) {
          const signer = await operaProvider.getSigner()
          try {
            const localAddress = EthAddressWrapper.fromString(await signer.getAddress())
            ethereum.autoRefreshOnNetworkChange = false
            if (mounted()) {
              setSigner(signer)
              setProvider(provider)
              setLocalAddress(localAddress)
            }
          } catch (ex) {
            if (mounted()) {
              setError(new Error(`localAddress: ${ex}`))
            }
          }
        }
      }
    },
    [ethereum, localAddress],
  )

  const value = useMemo(() => ({
    busy: false, chainId, error, isConnected, localAddress, provider, signer,
  }), [chainId, error, isConnected, localAddress, provider, signer])

  return (
    <EthersContext
      value={value}
    >
      {children}
    </EthersContext>
  )
}
