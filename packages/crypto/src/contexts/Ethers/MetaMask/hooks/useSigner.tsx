import { EthAddress } from '@xylabs/eth-address'
import { usePromise } from '@xylabs/react-promise'
import { JsonRpcSigner } from 'ethers'

import { MetaMaskConnector } from '../../wallets'

export const useSigner = (metamaskConnector: MetaMaskConnector, localAddress?: EthAddress): JsonRpcSigner | undefined => {
  const [signer] = usePromise(async () => {
    try {
      // In a browser context, we should never build a signer without first having an allowed address
      if (localAddress) {
        return await metamaskConnector.signerFromAddress(localAddress?.toString())
      }
    } catch (ex) {
      console.error(ex)
    }
  }, [localAddress, metamaskConnector])

  return signer
}
