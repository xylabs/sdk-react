import { Paper, PaperProps } from '@mui/material'

import { useWalletDiscovery } from './hooks'
import { EIP6963ProviderDetail } from './lib'
import { WalletsDiscoveredMenuItems } from './MenuItems'

export type onWalletSelect = (wallet: EIP6963ProviderDetail) => void

export interface WalletDiscoveryPaperProps extends PaperProps {
  onWalletSelect?: onWalletSelect
}

export const WalletDiscoveryPaper: React.FC<WalletDiscoveryPaperProps> = (props) => {
  const discoveredWallets = useWalletDiscovery()
  return (
    <Paper elevation={2} {...props}>
      <WalletsDiscoveredMenuItems discoveredWallets={discoveredWallets} />
    </Paper>
  )
}
