import type { BrowserProvider } from 'ethers'
import { InfuraProvider } from 'ethers'
import type { PropsWithChildren } from 'react'
import React, { useMemo } from 'react'

import { EthersContext } from '../Context.ts'

interface Props {
  enabled?: boolean
}

export const infuraKey = '1d9f8053c65a49cfb99fafaa8ef201c0'

export const InfuraEthersLoader: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children } = props

  const chainId = 1
  const provider = new InfuraProvider(1, infuraKey) as unknown as BrowserProvider

  const value = useMemo(() => ({
    busy: false, chainId, provider, isConnected: false,
  }), [chainId, provider])

  return (
    <EthersContext.Provider
      value={value}
    >
      {children}
    </EthersContext.Provider>
  )
}
