import { useMemo } from 'react'

import { EIP6963Connector } from '../classes/index.ts'
import type { EthWallet, SelectedWallet } from '../types/index.ts'
import { useEthWallet } from './useEthWallet.tsx'

export const useEIP6963Wallet = (selectedWallet: SelectedWallet | undefined): EthWallet => {
  const {
    info, provider, rawProvider,
  } = selectedWallet ?? {}
  const connector = useMemo(() => new EIP6963Connector(provider, rawProvider, info), [info, provider, rawProvider])

  return useEthWallet(connector)
}
