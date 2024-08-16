import { CheckCircleOutline } from '@mui/icons-material'
import type { CardHeaderProps } from '@mui/material'
import { CardHeader } from '@mui/material'
import type { EthAddress } from '@xylabs/eth-address'
import React from 'react'

import { ConstrainedImage } from '../shared/index.ts'

export interface WalletOverviewCardHeaderProps extends CardHeaderProps {
  currentAccount?: EthAddress
  icon?: string
  walletName?: string
}

export const WalletOverviewCardHeader: React.FC<WalletOverviewCardHeaderProps> = ({ currentAccount, icon, walletName, ...props }) => {
  return (
    <CardHeader
      avatar={<ConstrainedImage constrainedValue="42px" src={icon} />}
      title={walletName}
      action={currentAccount ? <CheckCircleOutline color="success" /> : null}
      {...props}
    />
  )
}
