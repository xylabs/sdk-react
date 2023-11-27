import { BrowserProvider } from 'ethers'
import { useMemo } from 'react'

import { EthWallet } from '../../EthWallet'
import { useEthWallet } from '../../hooks'
import { EIP6963ProviderInfo } from '../../lib'
import { EIP6963Connector } from './EIP6963Connector'

export const useEIP6963Wallet = (provider?: BrowserProvider, info?: EIP6963ProviderInfo): EthWallet => {
  const connector = useMemo(() => new EIP6963Connector(provider, info), [info, provider])

  return useEthWallet(connector)
}
