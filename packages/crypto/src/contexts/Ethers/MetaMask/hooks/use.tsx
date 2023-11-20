import { usePromise } from '@xylabs/react-promise'
import { useMemo } from 'react'

import { MetaMaskConnector } from '../../wallets'
import { useChainId } from './useChainId'
import { useConnectMetaMask } from './useConnect'
import { useCurrentAddress } from './useCurrentAddress'
import { useProviders } from './useProvider'
import { useSigner } from './useSigner'

const metamaskConnector = new MetaMaskConnector()

export const useMetaMask = (defaultChainId = 1) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentAddress, additionalAddresses] = useCurrentAddress(metamaskConnector)

  const chainId = useChainId(metamaskConnector)

  const [provider, walletProvider, providerName] = useProviders(metamaskConnector, chainId ?? defaultChainId)

  const { connect, connectRefused, connectError } = useConnectMetaMask(metamaskConnector)

  const signer = useSigner(metamaskConnector, currentAddress)
  const [signerAddress] = usePromise(async () => await signer?.getAddress(), [signer])

  // preserve the 'this' context when calling a class method
  const signMessage = useMemo(() => metamaskConnector.signMessage.bind(metamaskConnector), [])

  return {
    chainId,
    connect,
    connectError,
    connectRefused,
    currentAddress,
    provider,
    providerName,
    signMessage,
    signer,
    signerAddress,
    walletProvider,
  }
}
