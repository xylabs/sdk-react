import React, { PropsWithChildren } from 'react'

import { useMetaMask } from '../../wallets'
import { EthersContext } from './Context'

export interface Props {
  defaultChainId?: number
  enabled?: boolean
}

/** @deprecated - use useMetaMask hook instead */
export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children, defaultChainId = 1 }) => {
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
  } = useMetaMask(defaultChainId)

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
        signerAddress,
        walletProvider: provider,
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
