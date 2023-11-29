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
      avatar={
        <span style={{ height: '42px', width: '42px' }}>
          <img style={{ maxWidth: '42px' }} src={icon} />
        </span>
      }
      title={walletName}
      action={currentAccount ? <CheckCircleOutline color="success" /> : null}
      {...props}
    />
  )
}
