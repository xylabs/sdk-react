import { JsonRpcSigner } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useMemo } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useSigner = (metamaskConnector: MetaMaskConnector, localAddress?: EthAddress): JsonRpcSigner | null | undefined => {
  const signer = useMemo(() => {
    let signer = null
    try {
      signer = metamaskConnector.signerFromAddress(localAddress?.toString())
    } catch (ex) {
      console.error(ex)
    }
    return signer
  }, [localAddress, metamaskConnector])

  return signer
}
