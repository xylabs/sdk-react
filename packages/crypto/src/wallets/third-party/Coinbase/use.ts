import { usePromise } from '@xylabs/react-promise'
import { useMemo } from 'react'

import { EthWallet } from '../../EthWallet'
import { useChainId, useConnectWallet, useCurrentAccount, useProvider, useSigner } from '../../hooks'
import { CoinbaseConnector } from './CoinbaseConnector'

const coinbaseConnector = new CoinbaseConnector()

export const useCoinbaseWallet = (defaultChainId = 1): EthWallet => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentAccount, additionalAccounts] = useCurrentAccount(coinbaseConnector)

  const chainId = useChainId(coinbaseConnector)

  const { provider, providerName } = useProvider(coinbaseConnector)

  const { connectWallet, connectRefused, connectError } = useConnectWallet(coinbaseConnector)

  const signer = useSigner(coinbaseConnector, currentAccount)
  const [signerAddress] = usePromise(async () => await signer?.getAddress(), [signer])

  // preserve the 'this' context when calling a class method
  const signMessage = useMemo(() => coinbaseConnector.signMessage.bind(coinbaseConnector), [])

  const installed = useMemo(() => coinbaseConnector.installed, [])

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
