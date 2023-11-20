import { EthAddress } from '@xylabs/eth-address'
import { usePromise } from '@xylabs/react-promise'
import { JsonRpcSigner } from 'ethers'

import { MetaMaskConnector } from '../../wallets'

export const useSigner = (metamaskConnector: MetaMaskConnector, localAddress?: EthAddress): JsonRpcSigner | undefined => {
  const [signer] = usePromise(async () => {
    try {
      if (localAddress) {
        return await metamaskConnector.signerFromAddress(localAddress?.toString())
      }
    } catch (ex) {
      console.error(ex)
    }
  }, [localAddress, metamaskConnector])

  return signer
}
