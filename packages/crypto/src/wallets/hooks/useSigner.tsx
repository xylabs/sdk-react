import { EthAddress } from '@xylabs/eth-address'
import { usePromise } from '@xylabs/react-promise'
import { JsonRpcSigner } from 'ethers'

import { EthWalletConnectorBase } from '../third-party/classes'

export const useSigner = (ethWalletConnector: EthWalletConnectorBase, localAddress?: EthAddress): JsonRpcSigner | undefined => {
  const [signer] = usePromise(async () => {
    if (ethWalletConnector.installed) {
      try {
        // In a browser context, we should never build a signer without first having an allowed address
        if (localAddress) {
          return await ethWalletConnector.signerFromAddress(localAddress?.toString())
        }
      } catch (ex) {
        console.error(ex)
      }
    }
  }, [localAddress, ethWalletConnector])

  return signer
}
