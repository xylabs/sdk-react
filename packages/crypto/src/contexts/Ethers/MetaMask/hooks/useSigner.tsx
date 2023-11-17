import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useMemo } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useSigner = (
  metamaskConnector: MetaMaskConnector,
  enabled?: boolean,
  provider?: Web3Provider,
  localAddress?: EthAddress,
): JsonRpcSigner | null | undefined => {
  const signer = useMemo(() => {
    if (enabled) {
      let signer = null
      try {
        signer = provider?.getSigner(localAddress?.toString())
      } catch (ex) {
        console.error(ex)
      }
      return signer
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, metamaskConnector.currentAddress, provider, localAddress])
  return signer
}
