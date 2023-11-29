import { Card, CardProps } from '@mui/material'
import { EthAddress } from '@xylabs/eth-address'
import { useEffect, useState } from 'react'

import { useEthWallet } from '../../hooks'
import { EIP6963Connector } from '../../third-party'
import { WalletOverviewCardActions } from './CardActions'
import { WalletOverviewCardContent } from './CardContent'
import { WalletOverviewCardHeader } from './CardHeader'

export interface WalletOverviewCardProps extends CardProps {
  ethWalletConnector: EIP6963Connector
}

export const WalletOverviewCard: React.FC<WalletOverviewCardProps> = ({ ethWalletConnector, ...props }) => {
  const { connectWallet, connectRefused, chainId, connectError, currentAccount, providerInfo, providerName, signMessage, signerAddress } =
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
        chainId={chainId}
        connectError={connectError}
        connectRefused={connectRefused}
        currentAccount={currentAccount}
        signResponse={signResponse}
      />
      <WalletOverviewCardActions connectWallet={connectWallet} currentAccount={currentAccount} onSign={onSign} />
    </Card>
  )
}