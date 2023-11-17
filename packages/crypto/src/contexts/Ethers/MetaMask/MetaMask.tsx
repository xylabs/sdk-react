import { usePromise } from '@xylabs/react-promise'
import React, { PropsWithChildren, useState } from 'react'

import { EthersContext } from '../Context'
import { MetaMaskConnector } from '../wallets'
import { useChainId, useConnectMetaMask, useCurrentAddress, useProviders, useSigner } from './hooks'

export interface Props {
  defaultChainId?: number
  enabled?: boolean
}

export const MetaMaskEthersLoader: React.FC<PropsWithChildren<Props>> = ({ children, defaultChainId = 1, enabled = true }) => {
  const [metamaskConnector] = useState<MetaMaskConnector>(new MetaMaskConnector())

  const currentAddress = useCurrentAddress(metamaskConnector, enabled)

  const chainId = useChainId(metamaskConnector, enabled)

  const [provider, walletProvider, providerName] = useProviders(metamaskConnector, enabled, chainId ?? defaultChainId)

  const [connect, connectRefused, connectError] = useConnectMetaMask(walletProvider)

  const signer = useSigner(metamaskConnector, enabled, walletProvider, currentAddress)
  const [signerAddress] = usePromise(async () => await signer?.getAddress(), [signer])

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
