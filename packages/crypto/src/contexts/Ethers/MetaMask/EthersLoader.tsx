import React, { PropsWithChildren } from 'react'

import { EthersContext } from '../Context'
import { useMetaMask } from './hooks'

export interface Props {
  defaultChainId?: number
  enabled?: boolean
}

export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children, defaultChainId = 1 }) => {
  const {
    chainId,
    connect,
    connectRefused,
    connectError,
    currentAccount: currentAddress,
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
        isConnected: !!currentAddress,
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
