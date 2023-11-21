import { usePromise } from '@xylabs/react-promise'
import { useMemo } from 'react'

import { MetaMaskConnector } from '../../wallets'
import { useChainId } from './useChainId'
import { useConnectMetaMask } from './useConnect'
import { useCurrentAccount } from './useCurrentAccount'
import { useProvider } from './useProvider'
import { useSigner } from './useSigner'

const metamaskConnector = new MetaMaskConnector()

export const useMetaMask = (defaultChainId = 1) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentAccount, additionalAccounts] = useCurrentAccount(metamaskConnector)

  const chainId = useChainId(metamaskConnector)

  const { provider, providerName } = useProvider(metamaskConnector)

  const { connect, connectRefused, connectError } = useConnectMetaMask(metamaskConnector)

  const signer = useSigner(metamaskConnector, currentAccount)
  const [signerAddress] = usePromise(async () => await signer?.getAddress(), [signer])

  // preserve the 'this' context when calling a class method
  const signMessage = useMemo(() => metamaskConnector.signMessage.bind(metamaskConnector), [])

  return {
    chainId: chainId ?? defaultChainId,
    connect,
    connectError,
    connectRefused,
    currentAccount,
    provider,
    providerName,
    signMessage,
    signer,
    signerAddress,
  }
}
