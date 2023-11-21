import { usePromise } from '@xylabs/react-promise'
import { useMemo } from 'react'

import { EthWallet } from '../../EthWallet'
import { useChainId, useConnectMetaMask, useCurrentAccount, useProvider, useSigner } from '../../hooks'
import { MetaMaskConnector } from './MetaMaskConnector'

const metamaskConnector = new MetaMaskConnector()

export const useMetaMask = (defaultChainId = 1): EthWallet => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentAccount, additionalAccounts] = useCurrentAccount(metamaskConnector)

  const chainId = useChainId(metamaskConnector)

  const { provider, providerName } = useProvider(metamaskConnector)

  const { connectWallet, connectRefused, connectError } = useConnectMetaMask(metamaskConnector)

  const signer = useSigner(metamaskConnector, currentAccount)
  const [signerAddress] = usePromise(async () => await signer?.getAddress(), [signer])

  // preserve the 'this' context when calling a class method
  const signMessage = useMemo(() => metamaskConnector.signMessage.bind(metamaskConnector), [])

  const installed = useMemo(() => metamaskConnector.installed, [])

  return {
    chainId: chainId ?? defaultChainId,
    connectError,
    connectRefused,
    connectWallet,
    currentAccount,
    installed,
    provider,
    providerName,
    signMessage,
    signer,
    signerAddress,
  }
}
