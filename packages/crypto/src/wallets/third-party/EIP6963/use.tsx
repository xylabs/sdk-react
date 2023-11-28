import { useMemo } from 'react'

import { EthWallet } from '../../EthWallet'
import { useEthWallet } from '../../hooks'
import { SelectedWallet } from '../../lib'
import { EIP6963Connector } from './EIP6963Connector'

export const useEIP6963Wallet = (selectedWallet: SelectedWallet | undefined): EthWallet => {
  const connector = useMemo(
    () => new EIP6963Connector(selectedWallet?.provider, selectedWallet?.rawProvider, selectedWallet?.info),
    [selectedWallet?.info, selectedWallet?.provider, selectedWallet?.rawProvider],
  )

  return useEthWallet(connector)
}
