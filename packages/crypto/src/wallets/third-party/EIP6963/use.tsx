import { useMemo } from 'react'

import { EthWallet, SelectedWallet } from '../../types/index.js'
import { useEthWallet } from '../hooks/index.js'
import { EIP6963Connector } from './classes/index.js'

export const useEIP6963Wallet = (selectedWallet: SelectedWallet | undefined): EthWallet => {
  const { info, provider, rawProvider } = selectedWallet ?? {}
  const connector = useMemo(() => new EIP6963Connector(provider, rawProvider, info), [info, provider, rawProvider])

  return useEthWallet(connector)
}
