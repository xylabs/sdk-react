import type { MenuItemProps } from '@mui/material'
import { Alert } from '@mui/material'
import React from 'react'

import type { DiscoveredWallets } from '../../third-party/index.ts'
import type { onWalletSelect } from './lib/index.ts'
import { WalletDiscoveryMenuItem } from './MenuItem.tsx'

export interface WalletsDiscoveredMenuItemsProps extends MenuItemProps {
  discoveredWallets?: DiscoveredWallets
  onWalletSelect?: onWalletSelect
  suppressNoWalletsWarning?: boolean
}

export const WalletsDiscoveredMenuItems: React.FC<WalletsDiscoveredMenuItemsProps> = ({
  discoveredWallets,
  onWalletSelect,
  suppressNoWalletsWarning,
  ...props
}) => {
  return (
    discoveredWallets
      ? Object.values(discoveredWallets).map((eip6963Connector, index) => (
        <WalletDiscoveryMenuItem key={index} ethWalletConnector={eip6963Connector} onClick={() => onWalletSelect?.(eip6963Connector)} {...props} />
      ))
      : suppressNoWalletsWarning
        ? null
        : <Alert severity="warning">Unable to locate any installed wallets</Alert>
  )
}
