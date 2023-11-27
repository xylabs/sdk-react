import { ListItemIcon, Menu, MenuItem, MenuProps, styled } from '@mui/material'

import { useWalletDiscovery } from './hooks'

export interface WalletDiscoveryMenuProps extends MenuProps {}

export const WalletDiscoveryMenu: React.FC<WalletDiscoveryMenuProps> = (props) => {
  const discoveredWallets = useWalletDiscovery()
  return (
    <Menu {...props}>
      {Object.values(discoveredWallets).map(({ info }) => (
        <MenuItem divider key={info.uuid} sx={{ py: 2 }}>
          <ListItemIcon>
            <StyledImg src={info.icon} />
          </ListItemIcon>
          {info.name}
        </MenuItem>
      ))}
    </Menu>
  )
}

const StyledImg = styled('img', { name: 'StyledImg' })(({ theme }) => ({
  maxWidth: theme.spacing(3),
}))
