import { useMemo } from 'react'

import { useEthWallet } from '../../hooks'
import { EthWallet, SelectedWallet } from '../../types'
import { EIP6963Connector } from './classes'

export const useEIP6963Wallet = (selectedWallet: SelectedWallet | undefined): EthWallet => {
  const { info, provider, rawProvider } = selectedWallet ?? {}
  const connector = useMemo(() => new EIP6963Connector(provider, rawProvider, info), [info, provider, rawProvider])

  return useEthWallet(connector)
}
