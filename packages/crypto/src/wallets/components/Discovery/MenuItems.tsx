import { Alert, MenuItemProps } from '@mui/material'

import { DiscoveredWallets } from '../../types'
import { onWalletSelect } from './lib'
import { WalletDiscoveryMenuItem } from './MenuItem'

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
  return discoveredWallets ? (
    Object.values(discoveredWallets).map((eip6963Connector, index) => (
      <WalletDiscoveryMenuItem key={index} ethWalletConnector={eip6963Connector} onClick={() => onWalletSelect?.(eip6963Connector)} {...props} />
    ))
  ) : suppressNoWalletsWarning ? null : (
    <Alert severity={'warning'}>Unable to locate any installed wallets</Alert>
  )
}
