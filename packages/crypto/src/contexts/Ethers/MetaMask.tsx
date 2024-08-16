import type { PropsWithChildren } from 'react'
import React, { useMemo } from 'react'

import { useMetaMask } from '../../wallets/index.ts'
import { EthersContext } from './Context.ts'

export interface Props {
  /** @deprecated - wallet should determine this for you */
  defaultChainId?: number
  enabled?: boolean
}

/** @deprecated - use useMetaMask hook instead */
export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const {
    chainId,
    connectWallet: connect,
    connectRefused,
    connectError,
    currentAccount: currentAddress,
    installed,
    provider,
    providerName,
    signMessage,
    signer,
    signerAddress,
  } = useMetaMask()

  const value = useMemo(() => ({
    busy: false,
    chainId,
    connect,
    connectRefused,
    error: connectError,
    isConnected: installed,
    localAddress: currentAddress,
    provider,
    providerName,
    signMessage,
    signer,
    signerAddress: signerAddress?.toString(),
    walletProvider: provider,
  }), [
    chainId,
    connect,
    connectRefused,
    connectError,
    installed,
    currentAddress,
    provider,
    providerName,
    signMessage,
    signer,
    signerAddress,
    provider])

  return (
    <EthersContext.Provider
      value={value}
    >
      {children}
    </EthersContext.Provider>
  )
}
