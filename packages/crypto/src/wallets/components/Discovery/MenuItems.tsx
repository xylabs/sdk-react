import { Alert, ListItemIcon, MenuItem, MenuItemProps, styled } from '@mui/material'
import { Fragment } from 'react'

import { DiscoveredWallets, onWalletSelect } from './lib'

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
    Object.values(discoveredWallets).map(({ info, provider }, index) => (
      <Fragment key={index}>
        <StyledMenuItem onClick={() => onWalletSelect?.({ info, provider })} value={info.rdns} {...props}>
          <ListItemIcon>
            <StyledImg src={info.icon} />
          </ListItemIcon>
          {info.name}
        </StyledMenuItem>
      </Fragment>
    ))
  ) : suppressNoWalletsWarning ? null : (
    <Alert severity={'warning'}>Unable to locate any installed wallets</Alert>
  )
}

const StyledImg = styled('img', { name: 'StyledImg' })(({ theme }) => ({
  maxWidth: theme.spacing(3),
}))

const StyledMenuItem = styled(MenuItem, { name: 'StyledMenuItem' })(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  padding: `${theme.spacing(2)}`,
}))
