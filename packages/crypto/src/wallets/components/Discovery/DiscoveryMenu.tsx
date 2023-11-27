import { Alert, ListItemIcon, Menu, MenuItem, MenuProps, styled } from '@mui/material'
import { Fragment, useRef } from 'react'

import { useWalletDiscovery } from './hooks'
import { DiscoveredWallets, EIP6963ProviderDetail } from './lib'

export interface WalletDiscoveryMenuProps extends MenuProps {
  discoveredWallets?: DiscoveredWallets
  onWalletSelect?: (wallet: EIP6963ProviderDetail) => void
  suppressNoWalletsWarning?: boolean
}

export const DiscoveredWalletsMenu: React.FC<WalletDiscoveryMenuProps> = ({
  discoveredWallets,
  onWalletSelect,
  suppressNoWalletsWarning,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <div ref={ref}>
      {discoveredWallets && ref.current ? (
        <Menu anchorEl={ref.current} MenuListProps={{ sx: { py: 0 } }} {...props}>
          {Object.values(discoveredWallets).map(({ info, provider }, index) => (
            <Fragment key={index}>
              <StyledMenuItem onClick={() => onWalletSelect?.({ info, provider })} value={info.rdns}>
                <ListItemIcon>
                  <StyledImg src={info.icon} />
                </ListItemIcon>
                {info.name}
              </StyledMenuItem>
            </Fragment>
          ))}
        </Menu>
      ) : (
        <>{suppressNoWalletsWarning ? null : <Alert severity={'warning'}>Unable to locate any installed wallets</Alert>}</>
      )}
    </div>
  )
}

export const WalletDiscoveryMenu: React.FC<WalletDiscoveryMenuProps> = (props) => {
  const discoveredWallets = useWalletDiscovery()
  return <DiscoveredWalletsMenu discoveredWallets={discoveredWallets} {...props} />
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
