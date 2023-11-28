import { useMemo } from 'react'

import { useEthWallet } from '../../hooks'
import { EthWalletWithProviderInfo, SelectedWallet } from '../../types'
import { EIP6963Connector } from './EIP6963Connector'

export const useEIP6963Wallet = (selectedWallet: SelectedWallet | undefined): EthWalletWithProviderInfo => {
  const connector = useMemo(
    () => new EIP6963Connector(selectedWallet?.provider, selectedWallet?.rawProvider, selectedWallet?.info),
    [selectedWallet?.info, selectedWallet?.provider, selectedWallet?.rawProvider],
  )

  const ethWallet = useEthWallet(connector)

  return {
    ethWallet,
    info: selectedWallet?.info,
  }
}
