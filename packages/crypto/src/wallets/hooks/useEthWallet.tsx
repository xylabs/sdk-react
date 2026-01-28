import { EthAddressWrapper } from '@xylabs/eth-address'
import { usePromise } from '@xylabs/react-promise'
import { isDefined } from '@xylabs/typeof'
import { useMemo } from 'react'

import type { EthWalletConnectorBase } from '../classes/index.ts'
import type { EthWallet } from '../types/index.ts'
import { useChainId } from './useChainId.tsx'
import { useConnectWallet } from './useConnect.tsx'
import { useCurrentAccount } from './useCurrentAccount.ts'
import { useProvider } from './useProvider.tsx'
import { useSigner } from './useSigner.tsx'

/**
 * A hook that takes an instance of EthWalletConnectorBase and makes certain functionality reactive.
 */
export const useEthWallet = (connector?: EthWalletConnectorBase): EthWallet => {
  const [currentAccount, additionalAccounts] = useCurrentAccount(connector)

  const chainId = useChainId(connector)

  const chainName = useMemo(() => (isDefined(chainId) && isDefined(connector?.chainName) ? connector.chainName : undefined), [chainId, connector])

  const {
    provider, providerName, rawProvider,
  } = useProvider(connector)

  const {
    connectWallet, connectRefused, connectError,
  } = useConnectWallet(connector)

  const signer = useSigner(connector, currentAccount)

  const [signerAddress] = usePromise(async () => EthAddressWrapper.fromString(await signer?.getAddress()), [signer])

  const signMessage = useMemo(() => connector?.signMessage.bind(connector), [connector])

  const signTypedMessage = useMemo(() => connector?.signTypedMessage.bind(connector), [connector])

  const verifyTypedDataSignature = useMemo(() => connector?.verifyTypedDataSignature?.bind(connector), [connector])

  const installed = useMemo(() => connector?.installed, [connector?.installed])

  const providerInfo = useMemo(() => connector?.providerInfo, [connector?.providerInfo])

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
    rawProvider,
    providerName,
    signMessage,
    signTypedMessage,
    signer,
    signerAddress,
    verifyTypedDataSignature,

  }
}
