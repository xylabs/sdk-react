import { ListItemIcon, Menu, MenuItem, MenuProps, styled } from '@mui/material'

import { useWalletDiscovery } from './hooks'
import { DiscoveredWallets, EIP6963ProviderDetail } from './lib'

export interface WalletDiscoveryMenuProps extends MenuProps {
  discoveredWallets?: DiscoveredWallets
  onWalletSelect?: (wallet: EIP6963ProviderDetail) => void
}

export const DiscoveredWalletsMenu: React.FC<WalletDiscoveryMenuProps> = ({ discoveredWallets, onWalletSelect, ...props }) => {
  return (
    <Menu {...props}>
      {discoveredWallets
        ? Object.values(discoveredWallets).map(({ info, provider }, index) => (
            <MenuItem divider key={index} sx={{ py: 2 }} onClick={() => onWalletSelect?.({ info, provider })} value={info.rdns}>
              <ListItemIcon>
                <StyledImg src={info.icon} />
              </ListItemIcon>
              {info.name}
            </MenuItem>
          ))
        : null}
    </Menu>
  )
}

export const WalletDiscoveryMenu: React.FC<WalletDiscoveryMenuProps> = (props) => {
  const discoveredWallets = useWalletDiscovery()
  return <DiscoveredWalletsMenu discoveredWallets={discoveredWallets} {...props} />
}

const StyledImg = styled('img', { name: 'StyledImg' })(({ theme }) => ({
  maxWidth: theme.spacing(3),
}))
