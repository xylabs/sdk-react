import { useMemo } from 'react'

import { EthWalletInstance } from '../../lib/index.ts'
import type { EthWalletConnectorBase } from '../classes/index.ts'

/**
 * A wrapper for the Ethereum wallet connection that adds functionality that is not
 * supported by the provider interface directly.
 *
 * Metamask in particular supports many `wallet_*` rpc calls have their own EIP-* proposal.
 * See - https://docs.metamask.io/wallet/reference/json-rpc-methods/
 *
 * @param connector An instance of EthWalletConnectorBase
 * @returns
 */
export const useEthWalletInstance = (connector: EthWalletConnectorBase) => {
  const ethWalletInstance = useMemo(() => new EthWalletInstance(connector), [connector])

  return ethWalletInstance
}
