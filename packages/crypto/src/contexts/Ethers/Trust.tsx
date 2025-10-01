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

export const TrustEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props
  const [error, setError] = useState<Error>()
  const [signer, setSigner] = useState<JsonRpcSigner>()
  const [localAddress, setLocalAddress] = useState<EthAddressWrapper>()

  const trustProvider = useMemo(() => (globalThis.ethereum ? new BrowserProvider(globalThis.ethereum) : undefined), [])

  const chainId = 1

  const provider = trustProvider

  useAsyncEffect(
    async (mounted) => {
      if (trustProvider) {
        const [existingAddress]: string[] = (await trustProvider.send('eth_accounts', [])) ?? []
        if (existingAddress !== localAddress?.toString()) setLocalAddress(EthAddressWrapper.fromString(existingAddress))
        if (localAddress) {
          const localSigner = await trustProvider.getSigner()
          setSigner(localSigner)
          try {
            const localAddress = EthAddressWrapper.fromString(await localSigner.getAddress())
            if (mounted()) {
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
    [localAddress, trustProvider],
  )

  const value = useMemo(() => ({
    busy: false, chainId, error, localAddress, provider, signer,
  }), [
    chainId,
    error,
    localAddress,
    provider,
    signer,
  ])

  return (
    <EthersContext
      value={value}
    >
      {children}
    </EthersContext>
  )
}
