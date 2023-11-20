import React, { PropsWithChildren } from 'react'

import { EthersContext } from '../Context'
import { useMetaMask } from './hooks'

export interface Props {
  defaultChainId?: number
  enabled?: boolean
}

// TODO - separate out infura provider into new hook

export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children, defaultChainId = 1 }) => {
  const {
    chainId,
    connect,
    connectRefused,
    connectError,
    currentAddress,
    provider,
    providerName,
    signMessage,
    signer,
    signerAddress,
    walletProvider,
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
        signer,

        signerAddress,
        walletProvider,
      }}
    >
      {children}
    </EthersContext.Provider>
  )
}
