import { EthAddress } from '@xylabs/eth-address'
import { usePromise } from '@xylabs/react-promise'
import { useMemo } from 'react'

import { EthWallet } from '../../types'
import { EthWalletConnectorBase } from '../classes'
import { useChainId } from './useChainId'
import { useConnectWallet } from './useConnect'
import { useCurrentAccount } from './useCurrentAccount'
import { useProvider } from './useProvider'
import { useSigner } from './useSigner'

/**
 * A hook that takes an instance of EthWalletConnectorBase and makes certain functionality reactive.
 */
export const useEthWallet = (connector: EthWalletConnectorBase): EthWallet => {
  const [currentAccount, additionalAccounts] = useCurrentAccount(connector)

  const chainId = useChainId(connector)

  const { provider, providerName } = useProvider(connector)

  const { connectWallet, connectRefused, connectError } = useConnectWallet(connector)

  const signer = useSigner(connector, currentAccount)
  const [signerAddress] = usePromise(async () => EthAddress.fromString(await signer?.getAddress()), [signer])

  // preserve the 'this' context when calling a class method
  const signMessage = useMemo(() => connector.signMessage.bind(connector), [connector])

  const installed = useMemo(() => connector.installed, [connector.installed])

  const providerInfo = useMemo(() => connector.providerInfo, [connector.providerInfo])

  return {
    additionalAccounts,
    chainId,
    connectError,
    connectRefused,
    connectWallet,
    currentAccount,
    installed,
    provider,
    providerInfo,
    providerName,
    signMessage,
    signer,
    signerAddress,
  }
}
