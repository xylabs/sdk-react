import type { CardProps } from '@mui/material'
import { Card } from '@mui/material'
import { EthAddress } from '@xylabs/eth-address'
import React, { useEffect, useState } from 'react'

import type { EIP6963Connector } from '../../third-party/index.ts'
import { useEthWallet } from '../../third-party/index.ts'
import { WalletOverviewCardActions } from './CardActions.tsx'
import { WalletOverviewCardContent } from './CardContent.tsx'
import { WalletOverviewCardHeader } from './CardHeader.tsx'

export interface WalletOverviewCardProps extends CardProps {
  ethWalletConnector: EIP6963Connector
}

export const WalletOverviewCard: React.FC<WalletOverviewCardProps> = ({ ethWalletConnector, ...props }) => {
  const { connectWallet, connectRefused, chainName, connectError, currentAccount, providerInfo, providerName, signMessage, signerAddress }
    = useEthWallet(ethWalletConnector)
  const [signResponse, setSignResponse] = useState<EthAddress>()

  useEffect(() => {
    setSignResponse(undefined)
  }, [signerAddress])

  const onSign = async () => {
    const signResult = await signMessage?.('test')
    setSignResponse(EthAddress.fromString(signResult))
  }

  return (
    <Card {...props}>
      <WalletOverviewCardHeader currentAccount={currentAccount} icon={providerInfo?.icon} walletName={providerName} />
      <WalletOverviewCardContent
        chainName={chainName}
        connectError={connectError}
        connectRefused={connectRefused}
        currentAccount={currentAccount}
        signResponse={signResponse}
      />
      <WalletOverviewCardActions connectWallet={connectWallet} currentAccount={currentAccount} onSign={onSign} />
    </Card>
  )
}
