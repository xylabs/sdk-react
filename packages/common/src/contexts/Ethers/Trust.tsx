import { Web3Provider } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/sdk-js'
import { PropsWithChildren, useState } from 'react'

import { useAsyncEffect } from '../../lib'
import { EthersContext } from './Context'

interface Props {
  enabled?: boolean
}

export const TrustEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = window as any
  const [error, setError] = useState<Error>()
  const [localAddress, setLocalAddress] = useState<EthAddress>()

  const trustProvider = new Web3Provider(global.ethereum)
  const signer = trustProvider.getSigner()

  const chainId = 1

  const provider = trustProvider

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      if (signer) {
        try {
          const localAddress = EthAddress.fromString(await signer.getAddress())
          if (mounted()) {
            setLocalAddress(localAddress)
          }
        } catch (ex) {
          if (mounted()) {
            setError(Error(`localAddress: ${ex}`))
          }
        }
      }
    },
    [signer]
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
