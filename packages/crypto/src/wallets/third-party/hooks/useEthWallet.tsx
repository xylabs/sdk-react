import { EthAddress } from '@xylabs/eth-address'
import { usePromise } from '@xylabs/react-promise'
import { useMemo } from 'react'

import { EthWallet } from '../../types/index.js'
import { EthWalletConnectorBase } from '../classes/index.js'
import { useChainId } from './useChainId.jsx'
import { useConnectWallet } from './useConnect.jsx'
import { useCurrentAccount } from './useCurrentAccount.jsx'
import { useProvider } from './useProvider.jsx'
import { useSigner } from './useSigner.jsx'

/**
 * A hook that takes an instance of EthWalletConnectorBase and makes certain functionality reactive.
 */
export const useEthWallet = (connector: EthWalletConnectorBase): EthWallet => {
  const [currentAccount, additionalAccounts] = useCurrentAccount(connector)

  const chainId = useChainId(connector)

  const chainName = useMemo(() => (chainId ? connector.chainName : undefined), [chainId, connector])

  const { provider, providerName } = useProvider(connector)

  const { connectWallet, connectRefused, connectError } = useConnectWallet(connector)

  const signer = useSigner(connector, currentAccount)

  const [signerAddress] = usePromise(async () => EthAddress.fromString(await signer?.getAddress()), [signer])

  const signMessage = useMemo(() => connector.signMessage.bind(connector), [connector])

  const installed = useMemo(() => connector.installed, [connector.installed])

  const providerInfo = useMemo(() => connector.providerInfo, [connector.providerInfo])

  return {
    additionalAccounts,
    chainId,
    chainName,
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
