import { useMemo } from 'react'

import { useTryMethodCalls } from '../../hooks/index.ts'
import type { EthWalletConnectorBase } from '../classes/index.ts'
import { EthWalletApiInstance } from '../classes/index.ts'

/**
 * A wrapper for the Ethereum wallet connection that adds functionality that is not
 * supported by the BrowserProvider class directly.
 *
 * Metamask in particular supports many `wallet_*` rpc calls have their own EIP-* proposal.
 * See - https://docs.metamask.io/wallet/reference/json-rpc-methods/
 *
 * @param connector An instance of EthWalletConnectorBase
 * @returns
 */
export const useEthWalletApiInstance = (connector: EthWalletConnectorBase) => {
  const apiInstance = useMemo(() => new EthWalletApiInstance(connector), [connector])
  const { instance, error } = useTryMethodCalls<EthWalletApiInstance>(apiInstance)

  return {
    ethWalletApiInstance: instance,
    error,
  }
}
