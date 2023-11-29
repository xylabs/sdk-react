import { CheckCircleOutline } from '@mui/icons-material'
import { CardHeader, CardHeaderProps } from '@mui/material'
import { EthAddress } from '@xylabs/eth-address'

export interface WalletOverviewCardHeaderProps extends CardHeaderProps {
  currentAccount?: EthAddress
  icon?: string
  walletName?: string
}

export const WalletOverviewCardHeader: React.FC<WalletOverviewCardHeaderProps> = ({ currentAccount, icon, walletName, ...props }) => {
  return (
    <CardHeader
      avatar={<img style={{ width: '42px' }} src={icon} />}
      title={walletName}
      action={currentAccount ? <CheckCircleOutline color="success" /> : null}
      {...props}
    />
  )
}
