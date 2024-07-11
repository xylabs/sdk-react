import { Paper, PaperProps } from '@mui/material'

import { useWalletDiscovery } from './hooks/index.js'
import { onWalletSelect } from './lib/index.js'
import { WalletsDiscoveredMenuItems } from './MenuItems.jsx'

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
