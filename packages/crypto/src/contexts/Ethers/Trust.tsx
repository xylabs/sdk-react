import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { PropsWithChildren, useMemo, useState } from 'react'

import { EthersContext } from './Context'

interface Props {
  enabled?: boolean
}

export const TrustEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props
  const [error, setError] = useState<Error>()
  const [signer, setSigner] = useState<JsonRpcSigner>()
  const [localAddress, setLocalAddress] = useState<EthAddress>()

  const trustProvider = useMemo(() => new BrowserProvider(window.ethereum), [])

  const chainId = 1

  const provider = trustProvider

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      const existingAddress = (await trustProvider.send('eth_accounts', [])) as string[]
      setLocalAddress(EthAddress.fromString(existingAddress[0]))
      if (localAddress) {
        const localSigner = await trustProvider.getSigner()
        setSigner(localSigner)
        if (localSigner) {
          try {
            const localAddress = EthAddress.fromString(await localSigner.getAddress())
            if (mounted()) {
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
    [localAddress, trustProvider],
  )

  return (
    <EthersContext.Provider
      value={{
        busy: false,
        chainId,
        error,
        localAddress,
        provider,
        signer,
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
