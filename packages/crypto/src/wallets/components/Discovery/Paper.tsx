import { Paper, PaperProps } from '@mui/material'

import { useWalletDiscovery } from './hooks'
import { onWalletSelect } from './lib'
import { WalletsDiscoveredMenuItems } from './MenuItems'

export interface WalletDiscoveryPaperProps extends PaperProps {
  onWalletSelect?: onWalletSelect
}

export const WalletDiscoveryPaper: React.FC<WalletDiscoveryPaperProps> = ({ onWalletSelect, ...props }) => {
  const discoveredWallets = useWalletDiscovery()
  return (
    <Paper elevation={2} {...props}>
      <WalletsDiscoveredMenuItems discoveredWallets={discoveredWallets} onWalletSelect={onWalletSelect} />
    </Paper>
  )
}
