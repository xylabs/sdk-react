import { Paper, PaperProps } from '@mui/material'
import React from 'react'

import { useWalletDiscovery } from './hooks/index.ts'
import { onWalletSelect } from './lib/index.ts'
import { WalletsDiscoveredMenuItems } from './MenuItems.tsx'

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
