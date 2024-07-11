/* eslint-disable import/no-deprecated */
import React, { PropsWithChildren } from 'react'

import { useMetaMask } from '../../wallets/index.js'
import { EthersContext } from './Context.js'

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

  return (
    <EthersContext.Provider
      value={{
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
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
