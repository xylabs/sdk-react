import { Card, CardProps } from '@mui/material'
import { EthAddress } from '@xylabs/eth-address'
import { useEffect, useState } from 'react'

import { EIP6963Connector, useEthWallet } from '../../third-party/index.js'
import { WalletOverviewCardActions } from './CardActions.jsx'
import { WalletOverviewCardContent } from './CardContent.jsx'
import { WalletOverviewCardHeader } from './CardHeader.jsx'

export interface WalletOverviewCardProps extends CardProps {
  ethWalletConnector: EIP6963Connector
}

export const WalletOverviewCard: React.FC<WalletOverviewCardProps> = ({ ethWalletConnector, ...props }) => {
  const { connectWallet, connectRefused, chainName, connectError, currentAccount, providerInfo, providerName, signMessage, signerAddress } =
    useEthWallet(ethWalletConnector)
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
