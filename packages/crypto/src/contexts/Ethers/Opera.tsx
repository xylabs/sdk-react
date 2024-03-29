/* eslint-disable import/no-deprecated */
import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { PropsWithChildren, useState } from 'react'

import { EthersContext } from './Context'

interface Props {
  enabled?: boolean
}

export const OperaEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = window as any
  const ethereum = global.ethereum
  const [error, setError] = useState<Error>()
  const [signer, setSigner] = useState<JsonRpcSigner>()
  const [provider, setProvider] = useState<BrowserProvider>()
  const [localAddress, setLocalAddress] = useState<EthAddress | undefined>(
    (global.ethereum?.addresses?.length ?? 0) > 0 ? EthAddress.fromString(global.ethereum?.addresses?.[0]) : undefined,
  )

  const chainId = ethereum?.chainId ? Number.parseInt(ethereum?.chainId) : 1
  const isConnected = ethereum?.isConnected() ?? false

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      if (ethereum) {
        ethereum.enable()
        const operaProvider = new BrowserProvider(ethereum)
        const provider = operaProvider
        const [existingAddress]: string[] = (await provider.send('eth_accounts', [])) ?? []
        if (existingAddress !== localAddress?.toString()) setLocalAddress(EthAddress.fromString(existingAddress))
        if (localAddress) {
          const signer = await operaProvider.getSigner()
          try {
            const localAddress = EthAddress.fromString(await signer.getAddress())
            ethereum.autoRefreshOnNetworkChange = false
            if (mounted()) {
              setSigner(signer)
              setProvider(provider)
              setLocalAddress(localAddress)
            }
          } catch (ex) {
            if (mounted()) {
              setError(Error(`localAddress: ${ex}`))
            }
          }
        }
      }
    },
    [ethereum, localAddress],
  )

  return (
    <EthersContext.Provider
      value={{
        busy: false,
        chainId,
        error,
        isConnected,
        localAddress,
        provider,
        signer,
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
