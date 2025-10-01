import type { EthAddressWrapper } from '@xylabs/eth-address'
import { usePromise } from '@xylabs/react-promise'
import type { JsonRpcSigner } from 'ethers/providers'

import type { EthWalletConnectorBase } from '../classes/index.ts'

/** Locate the signer on the passed wallet for a given address */
export const useSigner = (ethWalletConnector?: EthWalletConnectorBase, localAddress?: EthAddressWrapper): JsonRpcSigner | undefined => {
  const [signer] = usePromise(async () => {
    if (ethWalletConnector?.installed) {
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
