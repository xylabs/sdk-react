import React, { ReactNode } from 'react'

import { InfuraEthersLoader } from './Infura/index.ts'
import { MetaMaskEthersLoader } from './MetaMask.tsx'
import { MyEtherWalletEthersLoader } from './MyEtherWallet.tsx'
import { OperaEthersLoader } from './Opera.tsx'
import { TrustEthersLoader } from './Trust.tsx'

export interface EthersLoaderProps {
  children?: ReactNode
  enabled?: boolean
}

export const EthersLoader: React.FC<EthersLoaderProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global = window as any
  const { children } = props

  if (global.ethereum?.isMetaMask) {
    return <MetaMaskEthersLoader>{children}</MetaMaskEthersLoader>
  }

  if (global.ethereum?.isTrust) {
    return <TrustEthersLoader>{children}</TrustEthersLoader>
  }

  if (global.ethereum?.isMew) {
    return <MyEtherWalletEthersLoader>{children}</MyEtherWalletEthersLoader>
  }

  if (global.ethereum?.providerName === 'opera') {
    return <OperaEthersLoader>{children}</OperaEthersLoader>
  }

  if (global.ethereum) {
    return <OperaEthersLoader>{children}</OperaEthersLoader>
  }

  return <InfuraEthersLoader>{children}</InfuraEthersLoader>
}
