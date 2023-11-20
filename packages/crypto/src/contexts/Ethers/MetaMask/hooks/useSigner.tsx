import { EthAddress } from '@xylabs/eth-address'
import { usePromise } from '@xylabs/react-promise'
import { JsonRpcSigner } from 'ethers'

import { MetaMaskConnector } from '../../wallets'

export const useSigner = (metamaskConnector: MetaMaskConnector, localAddress?: EthAddress): JsonRpcSigner | null | undefined => {
  const [signer] = usePromise(async () => {
    let signer = null
    try {
      signer = await metamaskConnector.signerFromAddress(localAddress?.toString())
    } catch (ex) {
      console.error(ex)
    }
    return signer
  }, [localAddress, metamaskConnector])

  return signer
}
