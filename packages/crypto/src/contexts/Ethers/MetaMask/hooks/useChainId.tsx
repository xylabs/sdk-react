import { Listener } from '@ethersproject/providers'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { useState } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useChainId = (metamaskConnector: MetaMaskConnector, enabled?: boolean) => {
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
