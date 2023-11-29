import { RadioButtonChecked } from '@mui/icons-material'
import { ListItemIcon, ListItemText, MenuItem, MenuItemProps, styled } from '@mui/material'

import { useEthWallet } from '../../hooks'
import { EIP6963Connector } from '../../third-party'

export interface WalletDiscoveryMenuItemInnerProps extends MenuItemProps {
  approvedAccount?: boolean
  icon?: string
  name?: string
}

export const WalletDiscoveryMenuItemInner: React.FC<WalletDiscoveryMenuItemInnerProps> = ({ approvedAccount, icon, name, ...props }) => {
  return (
    <StyledMenuItem {...props}>
      <ListItemIcon>
        <StyledImg src={icon} />
      </ListItemIcon>
      <ListItemText>{name}</ListItemText>
      {approvedAccount ? (
        <StyledActiveIcon>
          <RadioButtonChecked color={'success'} />
        </StyledActiveIcon>
      ) : null}
    </StyledMenuItem>
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

const StyledActiveIcon = styled(ListItemIcon, { name: 'StyledActiveIcon' })(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'end',
  paddingLeft: theme.spacing(2),
}))

export interface WalletDiscoveryMenuItemProps extends WalletDiscoveryMenuItemInnerProps {
  ethWalletConnector: EIP6963Connector
}

export const WalletDiscoveryMenuItem: React.FC<WalletDiscoveryMenuItemProps> = ({ ethWalletConnector, ...props }) => {
  const { currentAccount, providerInfo } = useEthWallet(ethWalletConnector)
  return <WalletDiscoveryMenuItemInner approvedAccount={!!currentAccount} icon={providerInfo?.icon} name={providerInfo?.name} {...props} />
}
